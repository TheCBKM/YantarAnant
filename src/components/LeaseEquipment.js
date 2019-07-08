import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { link, route, getStorage, removeStorage } from './urls';
import ExtraDetails from './ExtraDetails';
import Spinners from './Spinners';



class LeaseEquipment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            userdata: [],
            nodata: true
        };

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
        axios.get(`${link}/requirement/recommendedList`).then((res) => {
            console.log();
            this.setState({
                userdata: res.data,
                nodata: false
            })
            console.log(this.state.userdata)

        }).catch(e => { console.log(e) })
    }


    render() {
        const details = this.state.userdata;

        return (

            <div style={ { paddingTop: "5%", alignContent: "center" } }>
                { details.length == 0 ? "" :
                    <table class=" dash-table">
                        <thead>
                            <tr>
                                <th>Equipment Name</th>
                                <th>Tenure(Days)</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { details.map(d =>

                                <tr>
                                    <td>{ d.subcategory.name }</td>
                                    <td>{ d.tenure }</td>
                                    <td>{ d.location }</td>
                                    <td><ExtraDetails 
                                        eqn={ d.subcategory.name }
                                        cap={ d.capacity }
                                        tn={ d.tenure }
                                        cn={ d.company.name }
                                        cp={ d.company.contactPerson }
                                        cnu={ d.company.contactNumber }
                                        em={ d.company.email }
                                        ct={ d.company.city }
                                        pin={ d.pinCode }
                                        doc={ d.company.createdAt }
                                        loc={ d.location }



                                    /></td>
                                </tr>) }

                        </tbody>
                    </table>

                }
                { this.state.nodata ?
                    <div>Loading<br />
                        <Spinners />
                    </div>
                    : <></> }
            </div>

        );
    }
}

export default LeaseEquipment;