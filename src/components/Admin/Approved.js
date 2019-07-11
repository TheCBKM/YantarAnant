import React, { Component } from 'react';
import { link, route, getStorage } from '../urls';
import axios from 'axios';

class Approved extends Component {
    constructor(props, context) {
        super(props, context);
        this.disapprove = this.disapprove.bind(this);
        this.delete = this.delete.bind(this);

        this.state = {
            productData: [],
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
    componentDidMount() {
        axios.get(`${link}/product/listall/1`).then((res) => {
            console.log(res.data);
            this.setState({
                productData: res.data,
                nodata: false
            })
            console.log(this.state.productData)

        })
    }
    delete(id) {
        alert(id)
        const sendData = {
            _id: id,
        }
        console.log(sendData)
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.delete(`${link}/product/delete`, sendData).then((res) => {
            console.log(res.data);
            alert("Product deleted")
            window.location.reload()
        })
    }
    disapprove(id) {
        // alert(id)
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        const sendData = {
            _id: id,
            status: -1
        }
        axios.post(`${link}/product/update`, sendData).then((res) => {
            console.log(res.data);
            alert("Product dis-Approved")
            window.location.reload()
        })
    }
    render() {
        const details = this.state.productData
        return (
            <div style={ { paddingTop: "2%" } }>
                < table class=" dash-table">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Company Name</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead> <tbody>
                        { details.map(d =>
                            <tr>
                                <td>{ d.name }</td>
                                <td>{ d.company.name }</td>
                                <td>{ d.company.contactNumber }</td>
                                <td>
                                    <button onClick={ () => this.disapprove((d._id)) } type="button" data-toggle="tooltip" title="Approve" class="btn btn-danger custom-btn"><i class="fa fa-ban" aria-hidden="true"></i></button>
                                    <button onClick={ () => this.delete((d._id)) } type="button" data-toggle="tooltip" title="Approve" class="btn btn-danger custom-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div >
        );
    }
}

export default Approved;