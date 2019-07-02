import React, { Component } from 'react';
import axios from 'axios';
import { link, route, getStorage } from '../urls';
import Button from 'react-bootstrap/Button';
import Spinners from '../Spinners';
import AddCompany from './AddCompany';
import FilterCompany from './FilterCompany';



class ViewCompany extends Component {
    constructor(props, context) {
        super(props, context);


        this.delet = this.delet.bind(this);
        this.deactivate = this.deactivate.bind(this);
        this.activate = this.activate.bind(this);

        this.state = {
            comapnydata: [],
            view: false,
            search: false,
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


    delet(id) {
        alert("delete")
        this.setState({ nodata: true });
        const sendData = { data: { _id: id } }
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.delete(`${link}/company/delete`, sendData).then((res) => {
            console.log(res);
            alert("Company Deleted")
            window.location.reload()
            //route("/adm")
        }).catch(e=>alert(e+"Try Again"))

    }


    deactivate(id) {
        alert("deactivate")
        this.setState({ nodata: true });
        const sendData = { _id: id ,companyStatus:0} 
        console.log(sendData)
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.post(`${link}/company/update`, sendData).then((res) => {
            console.log(res);
            alert("Company deactivate")
            window.location.reload()
            //route("/adm")
        }).catch(e=>alert(e+"Try Again"))
        
    }
    activate(id) {
        alert("activate")
        this.setState({ nodata: true });
        const sendData =   { _id: id ,companyStatus:2} 
        console.log(sendData)
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.post(`${link}/company/update`, sendData).then((res) => {
            console.log(res);
            alert("Company activate")
            window.location.reload()
            //route("/adm")
        }).catch(e=>alert(e+"Try Again"))

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
    handleShowfilter = () => {
        this.setState({ view: false, search: true });
    }
    handleShowfilterN = () => {
        this.setState({ view: false, search: false });
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
                        <div style={ { paddingLeft: "20%", paddingRight: "20%" } }><AddCompany /> </div>
                    </div>
                    : <div>
                        <Button variant="primary" onClick={ this.handleShow }>
                            + Add Company
                         </Button>
                       
                        { this.state.search ? <div> <Button variant="primary" onClick={ this.handleShowfilterN }>
                            All Compinies
                         </Button>
                         <FilterCompany />
                         </div>
                            :
                            <div>
                                 <Button variant="primary" onClick={ this.handleShowfilter }>
                            Filter Compinies
                         </Button>
                             {(details.length == 0) ? <h3>No data yet</h3> :
                                <table class=" dash-table">
                                    <thead>
                                        <tr>
                                            <th> Name</th>
                                            <th>city</th>
                                            <th>Address</th>
                                            <th>Number</th>
                                            <th>Contact Person</th>
                                            <th>Last Login</th>
                                            <th> Login Count</th>
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
                                                <td>{ new Date(d.lastLogin).toString().split(' ').slice(0, 4).join(' ') || "NO DATA" } </td>
                                                <td>{ d.loginCount }</td>
                                                <td>{ d.companyStatus?"Active":"Deactive" }</td>
                                                
                                                <td><div style={ { color: "red" } } onClick={ () => this.delet((d._id)) }>
                                                    <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
                                                </div>
                                               {d.companyStatus?
                                                <button onClick={ () => this.deactivate((d._id)) } type="button" data-toggle="tooltip" title="Deactivate" class="btn btn-danger custom-btn"><i class="fa fa-eye-slash" aria-hidden="true"></i></button>
                                                :
                                                <button   onClick={ () => this.activate((d._id)) } type="button" data-toggle="tooltip" title="Activate" class="btn btn-success custom-btn"><i class="fa fa-check" aria-hidden="true"></i></button>
                                               }
                                                
                                                </td>
                                                
                                            </tr>)
                                        }
    
                                    </tbody></table>
                             }
                                    </div>
                            }
                            

                        
                </div> }
                <div className="ffff"></div>

            </div>);
    }
}

export default ViewCompany;