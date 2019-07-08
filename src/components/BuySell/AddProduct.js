import React, { Component } from 'react';
import { link, getStorage, route } from "../urls";
import axios from 'axios';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: {},
            eqnarr: [],
            eqid:''
        }
        this.submitBtn = this.submitBtn.bind(this);
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    componentWillMount() {

        if (getStorage('uid')) {
            const obj = (getStorage('uid'))
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
    submitBtn() {
        const sendData = {
            name: this.state.name,
            company: this.state.data.companyId,
            subcategory:this.state.eqnarr[this.state.eqid].id,

        }
        console.log(sendData)
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.post(`${link}/product/save`, sendData).then((res) => {
            console.log(res.data);
        })
    }

    render() {
        const eqnarr = this.state.eqnarr

        return (
            <div>
                <label>Equipments Name*</label>

                <select name="eqid" onChange={ (event) => this.handleUserInput(event) }>
                    <option value={ -1 } >Choose........</option>
                    { eqnarr.map((eqn, i) =>
                        <option value={ i }>{ eqn.name }</option>
                    ) }
                </select>
                <label >Name</label>
                <input type="text" className="form-control"
                    name="name" onChange={ (event) => this.handleUserInput(event) } />
                <button id="focus" type="submit" className="btn btn-primary" onClick={ this.submitBtn } >Add Product to Sell</button>


            </div>
        );
    }
}

export default AddProduct;