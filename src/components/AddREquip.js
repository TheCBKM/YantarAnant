import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import Spinners from './Spinners';


import { link, route, getStorage } from './urls';

class AddREquip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            eqname: '',
            eqid: 0,
            cap: "",
            unit: "",
            loc: '',
            pin: "",
            eqnarr: [],
            tnure: "",
            nodata: true,
            adebtn: true,
            tenure:""
        }
        this.submitBtn = this.submitBtn.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    submitBtn() {
        if (this.state.pin.length == 6 && this.state.tenure.length != 0  && this.state.location !== "") {
            // window.location=`${location}/dash`
            this.setState({
                adebtn: false
            })
            console.log(this.state.eqnarr)
            const sendData =
            {
                subcategory: this.state.eqnarr[this.state.eqid].id,
                company: this.state.data.companyId,
                requirementStatus: "1",
                location: this.state.loc,
                pinCode: this.state.pin,
                userdata: [],
                subcatdataonclick: [],
                capacity: this.state.cap,
                unit: this.state.unit,
                tenure: this.state.tenure,
            }



            console.log(sendData);
            axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
            axios.post(`${link}/requirement/save`, sendData)
                .then((res) => {
                    console.log(res);
                     alert("Requirment Added")
                    window.location.reload()
                   // route("/dash")
                })
        }
        else alert("enter correct details")
    }
    componentWillMount() {

        if (getStorage('uid')) {
            const obj = getStorage('uid')
            this.state.data = obj;
            console.log(obj)
        }
        else {
            route("/login")
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
                    <Col><label>Equipment Name*</label>

                        <select name="eqid" onChange={ (event) => this.handleUserInput(event) }>
                            <option value={ -1 } >Choose........</option>

                            { eqnarr.map((eqn, i) =>
                                <option value={ i }>{ eqn.name }</option>
                            ) }
                        </select>
                    </Col>

                    <Col>
                        <label>Enter Capacity</label>
                        <input name="cap" type="number" onChange={ (event) => this.handleUserInput(event) } ></input>
                    </Col>
                    <Col>
                        <label>Unit </label><br />
                        <select name="unit" onChange={ (event) => this.handleUserInput(event) }>
                            <option value={ -1 } >Choose........</option>

                            <option value="Tonne">Tonne</option>
                            <option value="Cum">Cum</option>
                            <option value="Meter">Meter</option>
                            <option value="Kgs">Kgs</option>
                            <option value="Feet">Feet</option>
                            <option value="Tyres">Tyres</option>
                            <option value="Litre">Litre</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col><label>Location*</label><br />
                        <input name="loc" onChange={ (event) => this.handleUserInput(event) } type='text'></input>
                    </Col>
                    <Col>
                        <label>Pincode</label><br />
                        <input name="pin" type="number" onChange={ (event) => this.handleUserInput(event) } ></input>
                    </Col>
                    <Col>
                        <label>Tenure (days)</label><br />
                        <input name="tenure" type="number" onChange={ (event) => this.handleUserInput(event) } ></input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button type="submit" className="btn btn-primary" onClick={ this.submitBtn } >
                            { this.state.adebtn ? <div>Submit</div> : <div><Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> Loading</div> }
                        </button>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default AddREquip;