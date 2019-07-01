import React, { Component } from 'react';
import axios from 'axios';
import { link, route, getStorage } from '../urls';
import Spinners from '../Spinners';


class Requirments extends Component {
    constructor(props, context) {
        super(props, context);


        this.delet = this.delet.bind(this);

        this.state = {
            reqirdata: [],
            nodata: true

        }
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

        this.setState({ nodata: true });
        const sendData = { data: { _id: id } }
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.delete(`${link}/requirement/delete`, sendData).then((res) => {
            console.log(res);
            // alert("Equipment Deleted")
        window.location.reload();
            //route("/adm")
        })

    }
    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;

        axios.get(`${link}/requirement/list `).then((res) => {
            console.log(res.data);
            this.setState({
                reqirdata: res.data,
                nodata: false
            })
            console.log(this.state.categorydata)

        })
    }

    handleShow = () => {
        this.setState({ view: true });
    }

    handleClose = () => {
        this.setState({ view: false });
    }
    render() {
        const details = this.state.reqirdata

        return (
            <div style={ { paddingTop: "2%" } }>
     { this.state.nodata ?
                    <div>Loading<br />
                        <Spinners />
                    </div>
                    : <></> }
                { (details.length == 0) ? <h3>No data yet</h3> :
                    <table class=" dash-table">
                        <thead>
                            <tr>
                                <th> Equipment Name</th>
                                <th> Capacity</th>
                                <th> Tenure</th>
                                <th> Created date</th>
                                <th> Company Name</th>
                                <th> Contact Person</th>
                                <th> City</th>
                                <th> Contact Number</th>

                                <th>Action</th>
                            </tr>
                        </thead> <tbody>
                            { details.map(d =>
                                <tr>
                                    <td>{(d.subcategory)? d.subcategory.name:"No data" }</td>
                                    <td>{ d.capacity }</td>
                                    <td>{ d.tenure }</td>
                                    <td>{ new Date(d.createdAt)
                                        .toString()
                                        .split(" ")
                                        .slice(0, 4)
                                        .join(" ") }</td>
                                    <td>{ d.company.name }</td>
                                    <td>{ d.company.contactPerson }</td>
                                    <td>{ d.location }</td>
                                    <td>{ d.company.contactNumber }</td>

                                    <td><div style={ { color: "red" } } onClick={ () => this.delet((d._id)) }>
                                        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
                                    </div></td>
                                </tr>)
                            }

                        </tbody></table>
                }
            </div>

        );
    }
}

export default Requirments;