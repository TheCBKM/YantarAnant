import React, { Component } from 'react';
import { link, Route ,getStorage,removeStorage, route } from './urls';

import axios from 'axios';
import { Row } from 'reactstrap';
import Col from 'reactstrap/lib/Col';

class ViewProfile extends Component {
    state = {
        data: {},
        name: '',
        add: '',
        email: '',
        cn: '',
        named: true,
        addd: true,
        emaild: true,
        cnd: true
    }
    componentWillMount() {

        if (getStorage('uid')) {
            const obj = (getStorage('uid'))
            this.state.data = obj;
            console.log(obj)
            const data = this.state.data.user.company;
            this.setState({
                name: data.name,
                add: data.address,
                email: data.email,
                cn: data.contactNumber
            })
            console.log(data)


        }
        else {
            route('/dash')
        }
    }
    updatedata = () => {

        const sendData = {

            _id: this.state.data.companyId,
            email: this.state.email,
            name: this.state.name,
            contactPerson: this.state.cn,
            address: this.state.add
        }
        console.log(sendData)
        console.log(sendData);
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.post(`${link}/company/update`, sendData)
            .then((res) => {
                console.log(res);
                removeStorage('uid'); 
               // window.location.reload()
                route('/login')
            })
    }
    handleUserInput(e) {
        const name = e.target.name
        const value = e.target.value;
        this.setState({ [name]: value });

    }
    render() {
        const data = this.state.data.user.company;
        // document.getElementById("name").disabled=true
        // document.getElementById("add").disabled=true
        // document.getElementById("email").disabled=true
        // document.getElementById("cn").disabled=true
        return (
            <div>
                <Row>
                    <Col>
                        < button onClick={ (event) => this.setState({
                            named: false,
                            addd: false,
                            emaild: false,
                            cnd: false,
                        }) } >Edit</ button>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <lable>Name</lable><br />
                        <input name="name" value={ this.state.name } onChange={ (event) => this.handleUserInput(event) } placeholder={ data.name } disabled={ (this.state.named) ? "disabled" : "" } />

                    </Col>
                    <Col>
                        <lable>Address</lable><br />
                        <input name="add" value={ this.state.add } onChange={ (event) => this.handleUserInput(event) } placeholder={ data.address } disabled={ (this.state.addd) ? "disabled" : "" } />

                    </Col>

                </Row>
                <Row>
                    <Col>
                        <lable>Email</lable><br />
                        <input name="email" value={ this.state.email } onChange={ (event) => this.handleUserInput(event) } placeholder={ data.email } disabled={ (this.state.emaild) ? "disabled" : "" } />
                    </Col>
                    <Col>
                        <lable>Contact Numberlable</lable><br />
                        <input name="cn" value={ this.state.cn } onChange={ (event) => this.handleUserInput(event) } placeholder={ data.contactNumber } disabled={ (this.state.cnd) ? "disabled" : "" } />                </Col>

                </Row>
                <Row>
                    <Col>
                        <div>
                            < button onClick={ this.updatedata } >Update</ button>

                        </div></Col>
                        <Col>
                    <div>
                        < button onClick={ () => { window.location.reload() } } >Cancle</ button>

                    </div>
                    </Col>
            </Row>
            </div >

            
        );
    }
}

export default ViewProfile;