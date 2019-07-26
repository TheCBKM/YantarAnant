import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { link, route, getStorage } from './urls';
import Spinners from './Spinners';
import Spinner from 'react-bootstrap/Spinner'


class AddEquipment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            eqid: 0,
            eqid: '',
            qun: 0,
            cap: "",
            unit: "tone",
            loc: '',
            pin: "",
            eqnarr: [],
            sci: "",
            nodata: true,
            adebtn: true,
        }
        this.submitBtn = this.submitBtn.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });

    }

    submitBtn() {
        if (this.state.pin.length == 6 && this.state.qun.length != 0 && this.state.cap.length != 0 && this.state.location !== "") {
            this.setState({
                adebtn: false
            })
            console.log(this.state.eqnarr)
            const sendData =
            {
                subcategory: this.state.eqnarr[this.state.eqid].id,
                company: this.state.data.companyId,
                equipmentStatus: "1",
                location: this.state.loc,
                pinCode: this.state.pin,
                userdata: [],
                subcatdataonclick: [],
                quantity: this.state.qun,
                capacity: this.state.cap,
                unit: this.state.unit
            }
            console.log(sendData);
            axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
            axios.post(`${link}/equipment/save`, sendData)
                .then((res) => {
                    console.log(res);
                    // alert("Equipment Added")
                    alert("Equipment added")
                    //route("/dash")
                    window.location.reload();
                })
        }
        else alert("enter correct details")
    }
    componentWillMount() {

        if (getStorage('uid')) {
            const obj = (getStorage('uid'))
            this.state.data = obj;
            console.log(obj)
        }
        else {

            route("/login")
            //window.location.reload(); 
        }
    }

    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;

        axios.get(`${link}/subcategory/list`).then((res) => {
            console.log(res.data);
            this.setState({
                eqnarr: res.data,
                nodata: false
            })
        })
    }

    render() {
        const eqnarr = this.state.eqnarr
        return (
            <div>
                { this.state.nodata ?
                    <div>Loading<br />
                        <Spinners />
                    </div>
                    : <></> }
                <Row>
                    <Col>
                        <label>Equipments Name*</label>

                        <select name="eqid" onChange={ (event) => this.handleUserInput(event) }>
                            <option value={ -1 } >Choose........</option>
                            { eqnarr.map((eqn, i) =>
                                <option value={ i }>{ eqn.name }</option>
                            ) }
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Location*</label> <br />
                        <input name="loc" onChange={ (event) => this.handleUserInput(event) } type='text'></input>

                    </Col>
                    <Col>
                        <label>Unit </label> <br />
                        <select name="unit" onChange={ (event) => this.handleUserInput(event) }>

                            <option value={ -1 } >Choose........</option>
                            <option value="Tonne">Tonne </option>
                            <option value="Cum">Cum</option>
                            <option value="Meter">Meter</option>
                            <option value="Kgs">Kgs</option>
                            <option value="Feet">Feet</option>
                            <option value="Tyres">Tyres</option>
                            <option value="Litre">Litre</option>
                            <option value="KW">KW</option>
                            <option value="TPH">TPH</option>

                        </select>
                    </Col>
                </Row>
                <label>Enter Capacity</label>
                <input name="cap" type="number" onChange={ (event) => this.handleUserInput(event) } ></input>

                <Row>
                    <Col>
                        <label>Enter Quantity</label>
                        <input name="qun" type="number" onChange={ (event) => this.handleUserInput(event) } ></input>
                    </Col>


                    <Col>
                        <label>Pin code</label> <br />
                        <input name="pin" type="number" onChange={ (event) => this.handleUserInput(event) } ></input>

                    </Col>
                </Row>



                <button type="submit" id="adebtn" className="btn btn-primary" onClick={ this.submitBtn } >
                    { this.state.adebtn ? <div>Submit</div> : <div><Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> Loading</div> }
                </button>




            </div >
        );
    }
}

export default AddEquipment;