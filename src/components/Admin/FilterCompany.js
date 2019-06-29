import React, { Component } from 'react';
import axios from 'axios';
import { link, route, getStorage } from '../urls';
import Spinners from '../Spinners';

class FilterCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            comapnydata: [],
            filterdata: [],
            phone: 0,
            filter: '',
            viewSearch: false,
            date: '',
            sdate: '',
            nodata: true
        }
        this.search = this.search.bind(this);


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
    search() {

        const details = this.state.comapnydata
        const value = this.state.phone
        alert(value)

        if (this.state.filter === "city")
            this.setState({
                filterdata: details.filter(function (number) {
                    return number.city.toLowerCase() == value.toLowerCase();
                })
            })
        if (this.state.filter === "number")
            this.setState({
                filterdata: details.filter(function (number) {
                    return number.contactNumber == value;
                })

            })
            if (this.state.filter === "name")
            this.setState({
                filterdata: details.filter(function (number) {
                    return number.contactNumber.toLowerCase( ) == value     .toLowerCase();
                })

            })
        if (this.state.filter === "date") {
            const sdate = this.state.sdate
            const date = details.filter(function (number) {
                const d1 = new Date(value)||Date.now()
                const d2 = new Date(number.lastLogin ? number.lastLogin.substring(0, 10) : "0-0-0")
                const d3 = new Date(sdate)
                console.log(d1)
                console.log(d2)
                console.log(d3)
                // console.log(number.lastLogin.substring(0, 10))
                return d2.getDate() >= d1.getDate() && d2.getDate() <= d3.getDate()
            })
            console.log(date)
            this.setState({
                filterdata: date
            })
        }


    }
    componentWillMount() {

        if (getStorage('aid')) {
            const obj = (getStorage('aid'))
            this.state.data = obj;
            this.state.isrby = obj.companyId;
            console.log(obj)
        }
        else {
            route("/admlogin");

        }
    }
    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.get(`${link}/company/list`).then((res) => {
            console.log(res.data);
            this.setState({
                comapnydata: res.data,
                nodata: false
            })
            //console.log(this.state.comapnydata)

        })
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
        console.log(value)

    }

    render() {
        var details = this.state.filterdata;



        // console.log(lucky)
        return (

            <div>
            { this.state.nodata ?
                <div>Loading<br />
                    <Spinners />
                </div>
                : <></> }
                <label>Filter </label> <br />
                <select name="filter" onChange={ (event) => this.handleUserInput(event) }>

                    <option value={ -1 } >Choose........</option>
                    <option value="city">City</option>
                    <option value="number">Number</option>
                 
                    <option value="date" >Date</option>
                </select>
                <input name="phone" type={ this.state.filter === "number" ? "number" : this.state.filter === "city" ? "text" : this.state.filter === "date" ? "date" : "text" } onChange={ (event) => this.handleUserInput(event) } />
                {this.state.filter==="date"?<input name="sdate" type="date" onChange={ (event) => this.handleUserInput(event) } />:""}


                <button onClick={ this.search }>Search</button>

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
                                <th>Login Count</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead> <tbody>
                            {
                                details.map(d =>
                                    <tr>
                                        <td>{ d.name }</td>
                                        <td>{ d.city }</td>
                                        <td>{ d.address }</td>
                                        <td type="number">{ `${d.contactNumber}` }</td>
                                        <td>{ d.contactPerson }</td>
                                        <td>{ new Date(d.lastLogin).toString().split(' ').slice(0, 4).join(' ') || "NO DATA" } </td>
                                        <td>{ d.loginCount }</td>
                                        <td>{ d.status }</td>

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

FilterCompany.propTypes = {

};

export default FilterCompany;