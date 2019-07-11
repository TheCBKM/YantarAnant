import React, { Component } from 'react';
import { link, getStorage, route } from "../urls";
import axios from 'axios';
import UploadImage from './UploadImage'

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'NA',
            data: {},
            eqnarr: [],
            eqid: 'NA',
            brand: 'NA',
            model: 'NA   ',
            capacity: 0,
            price: 0,
            owner: 'NA',
            manfac: 2019,
            location: 'NA',
            pin: 452016
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
            subcategory: this.state.eqnarr[this.state.eqid].id,
            brand: this.state.brand,
            model: this.state.model,
            capacity: this.state.capacity,
            expectedPrice: this.state.price,
            owner: this.state.owner,
            manufactureYear: this.state.manfac,
            location: this.state.location,
            pinCode: this.state.pin
        }
        console.log(sendData)
        // axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        // axios.post(`${link}/product/save`, sendData).then((res) => {
        //     console.log(res.data);
        // })
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
                <label >brand</label>
                <input type="text" className="form-control"
                    name="brand" onChange={ (event) => this.handleUserInput(event) } />
                <label >Model</label>
                <input type="text" className="form-control"
                    name="model" onChange={ (event) => this.handleUserInput(event) } />
                <label >capacity</label>
                <input type="text" className="form-control"
                    name="capacity" onChange={ (event) => this.handleUserInput(event) } />
                <label >Expected price</label>
                <input type="text" className="form-control"
                    name="price" onChange={ (event) => this.handleUserInput(event) } />
                <label >owner</label>
                <input type="text" className="form-control"
                    name="owner" onChange={ (event) => this.handleUserInput(event) } />
                <label >Manufacture Year</label>
                <input type="text" className="form-control"
                    name="manfac" onChange={ (event) => this.handleUserInput(event) } />
                <label >Location</label>
                <input type="text" className="form-control"
                    name="location" onChange={ (event) => this.handleUserInput(event) } />
                <label >Pin Code</label>
                <input type="text" className="form-control"
                    name="pin" onChange={ (event) => this.handleUserInput(event) } />

                <button id="focus" type="submit" className="btn btn-primary" onClick={ this.submitBtn } >Add Product to Sell</button>
                <UploadImage />

            </div>
        );
    }
}

export default AddProduct;