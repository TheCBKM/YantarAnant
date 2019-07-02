import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import AddREquip from './AddREquip'
import axios from 'axios';
import { link,getStorage } from './urls';
import Spinners from './Spinners';

class RentEquipment extends Component {
    state = {
        userdata: [],
        nodata: true
    }
    componentWillMount() {

        if (getStorage('uid')) {
            const obj = getStorage('uid')
            this.state.data = obj;
        }
        else {
            window.location.pathname=`/login`
        }
    }

    componentDidMount(thi) {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.get(`${link}/requirement/list`).then((res) => {
            console.log();
            this.setState({
                userdata: res.data,
                show: false,
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
        axios.delete(`${link}/requirement/delete`, sendData).then((res) => {
            console.log(res);
            // alert("Equipment Deleted")
            window.location.pathname=`/dash`;
        })
           }


    render() {
        const details = this.state.userdata

        return (

            <div style={{paddingTop:"5%"}}>
            { this.state.nodata ?
                <div>Loading<br />
                    <Spinners />
                </div>
                : <></> }

                { this.state.view ?
                    <div  >

                        <Button variant="primary" onClick={ this.handleClose }>
                            View Details Added
                         </Button>
                         <div style={{paddingLeft:"20%",paddingRight:"20%"}}> <AddREquip /></div>
                       
                    </div>
                    : <div>
                        <Button variant="primary" onClick={ this.handleShow }>
                            + Add Requirement
                         </Button>
                        { (details.length == 0) ? <h3>No data yet</h3> :
                            <table class=" dash-table">
                                <thead>
                                    <tr>
                                        <th>Equipment Name</th>
                                        <th>Capacity</th>
                                        <th>Location</th>
                                        <th>Pin Code</th>
                                        <th>Tenure(Days)</th>
                                        <th>Date of Creation</th>
                                        <th>Action</th>
                                    </tr>
                                </thead> <tbody>
                                    { details.map(d =>
                                        <tr>
                                            <td>{ d.subcategory.name }</td>
                                            <td>{ d.capacity }</td>
                                            <td>{ d.location }</td>
                                            <td>{ d.pinCode }</td>
                                            <td>{ d.tenure }</td>
                                            <td>{ new Date(d.createdAt)
                                                .toString()
                                                .split(" ")
                                                .slice(0, 4)
                                                .join(" ") || "NO DATA" }</td>
                                            
                                            <td><div style={ { color: "red" } } onClick={ () => this.delet((d._id)) }>
                                                <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
                                            </div></td>
                                        </tr>
                                        )
                                    }

                                </tbody></table>
                        }
                    </div> }
            </div>
        );
    }
}

export default RentEquipment;