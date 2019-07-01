import React, { Component } from 'react';
import axios from 'axios';
import { link, route, getStorage } from '../urls';
import Spinners from '../Spinners';

class FeedBack extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            feeddata: [],
            view: false,
            nodata: true
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
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.get(`${link}/feedback/list`).then((res) => {
            console.log(res.data);
            this.setState({
                feeddata: res.data,
                nodata: false
            })
          // console.log(this.state.feeddata)
          

        })
    }

    handleShow = () => {
        this.setState({ view: true });
    }

    handleClose = () => {
        this.setState({ view: false });
    }
    render() {
        const details = this.state.feeddata
        console.log(details)

        return (
            <div style={{paddingTop:"2%"}}>
                   { this.state.nodata ?
                    <div>Loading<br />
                        <Spinners />
                    </div>
                    : <></> }

                        { (details.length == 0) ? <h3>No data yet</h3> :
                                <table class=" dash-table">
                                    <thead>
                                        <tr>
                                            <th> Company Name</th>
                                            <th>Contact Number</th>
                                            <th>Description</th>
                                            <th>Date</th> 
                                            
                                            <th>Action</th>
                                        </tr>
                                    </thead> <tbody>
                                        { details.map(d =>
                                            <tr>
                                                <td>{  d.company ? d.company.name : "no data" }</td>
                                                <td>{ d.company ? d.company.contactNumber : "no data"}</td>
                                                <td>{ d.comment }</td>
                                                <td>{ new Date(d.createdAt).toString().split(' ').slice(0, 4).join(' ') || "NO DATA"} </td>
                                               
                                                
                                                
                                            </tr>)
                                        }

                                    </tbody></table>
                        }
                    </div> 
         
        );
    }
}

export default FeedBack;