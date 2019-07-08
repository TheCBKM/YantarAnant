import React, { Component } from 'react';
import { link, route, getStorage } from '../urls';
import axios from 'axios';

class ViewProducts extends Component {
    constructor(props, context) {
        super(props, context);
        this.viewDetails = this.viewDetails.bind(this);

        this.state = {
            productData: [],
            data:{}
        };
    }
    viewDetails(id){
       alert(id)
       axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
       const sendData={
           _id:id,
           status:1
       }
       axios.post(`${link}/product/update`,sendData).then((res) => {
        console.log(res.data);
        alert("Product Approved")
            window.location.reload()
      })
    }
    componentWillMount() {

        if (getStorage('uid')) {
            const obj = getStorage('uid')
            this.state.data = obj;
            console.log(this.state.data)
           
        }
        else {
            route("/login")
        }
    }
    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;

        axios.get(`${link}/product/list`).then((res) => {
            console.log(res.data);
            this.setState({
                productData: res.data,
                nodata: false
            })
            console.log(this.state.productData)

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
                            <th>status</th>
                        </tr>
                    </thead> <tbody>
                        { details.map(d =>
                            <tr>
                                <td>{ d.name }</td>
                                <td>{ d.company.name }</td>
                                <td>{ d.company.contactNumber }</td>
                                <td>
                                    {d.status==0?
                                    <button onClick={ () => this.viewDetails((d._id)) } type="button" data-toggle="tooltip" title="Approve" class="btn btn-primary custom-btn">waiting</button>
                                    :d.status==1?
                                    <button onClick={ () => this.viewDetails((d._id)) } type="button" data-toggle="tooltip" title="Approve" class="btn btn-success custom-btn">approved</button>
                                    :
                                    <button onClick={ () => this.viewDetails((d._id)) } type="button" data-toggle="tooltip" title="Approve" class="btn btn-danger custom-btn">not approved</button>
                                }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                
            </div >
        );
    }
}

export default ViewProducts;