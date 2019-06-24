import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { link, location,getStorage } from './urls';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddEquipment from './AddEquipment'
import Spinners from './Spinners';

class Equipment extends Component {


    constructor(props, context) {
        super(props, context);
        this.delet = this.delet.bind(this);


        this.state = {
            userdata: [],
            show: false,
            view: false,
            nodata: true
        };
    }






    componentWillMount() {

        if (getStorage('uid')) {
            const obj =getStorage('uid')
            this.state.data = obj;
        }
        else {
            window.location.pathname=`/login`
        }



    }



    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.get(`${link}/equipment/list`).then((res) => {
            console.log();
            this.setState({
                userdata: res.data,
                nodata: false
            })
            console.log(this.state.userdata)

        })
    }
    handleShow = () => {
        this.setState({ view: true });
    }

    handleClose = () => {
        this.setState({ view: false });
    }

    delet(id) {
        this.setState({nodata:true});
        const sendData = { data: { _id: id } }
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.delete(`${link}/equipment/delete`, sendData).then((res) => {
            console.log(res);
            // alert("Equipment Deleted")
            window.location.pathname=`/dash`;
        })
        
    }
    render() {
        const details = this.state.userdata
        return (

            <div style={ { paddingTop: "5%" } }>
            { this.state.nodata ?
                <div>Loading<br />
                    <Spinners />
                </div>
                : <></> }


                { this.state.view ?
                    <div >

                        <Button variant="primary" onClick={ this.handleClose }>
                            View Details Added
                         </Button>
                        <div style={ { paddingLeft: "20%", paddingRight: "20%" } }> <AddEquipment /></div>
                    </div>
                    : <div>
                        <Button variant="primary" onClick={ this.handleShow }>
                            + Add Equipment
                         </Button>
                        { (details.length == 0) ? <h3>No data yet</h3> :
                            <table class=" dash-table">
                                <thead>
                                    <tr>
                                        <th>Equipment Name</th>
                                        <th>Capacity</th>
                                        <th>Location</th>
                                        <th>Quantity</th>
                                        <th>pincode</th>
                                        <th>Action</th>
                                    </tr>
                                </thead> <tbody>
                                    { details.map(d =>
                                        <tr>
                                            <td>{ d.subcategory?d.subcategory.name:"" }</td>
                                            <td>{ d.capacity }</td>
                                            <td>{ d.location }</td>
                                            <td>{ d.quantity }</td>
                                            <td>{ d.pinCode }</td>
                                            <td><div style={ { color: "red" } } onClick={ () => this.delet((d._id)) }>
                                                <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
                                            </div></td>
                                        </tr>)
                                    }

                                </tbody></table>
                        }
                    </div> }
                

            </div>);
    }
}
export default Equipment;