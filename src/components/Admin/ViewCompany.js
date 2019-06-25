import React, { Component } from 'react';
import axios from 'axios';
import { link, route, getStorage } from '../urls';
import Button from 'react-bootstrap/Button';
import Spinners from '../Spinners';
import AddCompany from './AddCompany';

class ViewCompany extends Component {
    constructor(props, context) {
        super(props, context);


        this.delet = this.delet.bind(this);

        this.state = {
            comapnydata: [],
            view:false
        };
    }

    componentWillMount() {

        if (getStorage('aid')) {
            const obj = getStorage('aid')
            this.state.data = obj;
        }
        else {
         
            route("/admlogin")
        }



    }


    delet(id) {
       
        this.setState({nodata:true});
        const sendData = { data: { _id: id } }
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.delete(`${link}/company/delete`, sendData).then((res) => {
            console.log(res);
            // alert("Equipment Deleted")
            window.location.reload()
            //route("/adm")
        })
        
    }
    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.get(`${link}/company/list`).then((res) => {
            console.log(res.data);
            this.setState({
                comapnydata: res.data,
                nodata: false
            })
            console.log(this.state.comapnydata)

        })
    }
    handleShow = () => {
        this.setState({ view: true });
    }

    handleClose = () => {
        this.setState({ view: false });
    }
    render() {

        const details = this.state.comapnydata
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
                            View Company
                         </Button>
                        <div style={ { paddingLeft: "20%", paddingRight: "20%" } }><AddCompany/> </div>
                    </div>
                    : <div>
                        <Button variant="primary" onClick={ this.handleShow }>
                            + Add Company
                         </Button>
                        { (details.length == 0) ? <h3>No data yet</h3> :
                            <table class=" dash-table">
                                <thead>
                                    <tr>
                                        <th> Name</th>
                                        <th>city</th>
                                        <th>Address</th>
                                        <th>Number</th>
                                        <th>Contact Person</th>
                                        <th>Last Login</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead> <tbody>
                                    { details.map(d =>
                                        <tr>
                                            <td>{ d.name }</td>
                                            <td>{ d.city }</td>
                                            <td>{ d.address }</td>
                                            <td type="number">{ `${d.contactNumber}` }</td>
                                            <td>{ d.contactPerson }</td>
                                            <td>{new Date( d.lastLogin).toString().split(' ').slice(0, 4).join(' ') || "NO DATA"} </td>
                                            <td>{ d.status }</td>

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

export default ViewCompany;