import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';
import axios from 'axios';
import { link, location, setStorage ,isNumber} from './urls';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.submitBtn = this.submitBtn.bind(this);
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value; 
        this.setState({ [name]: value });
    }
    componentDidMount() {
        console.log("mounted");
        document.getElementById("focus").focus();
    }

    submitBtn() {
        if(this.state.email.length===10)
        axios.post(`${link}/company/login`, {
            contactNumber: this.state.email,
            password: this.state.password
        }).then(function (res) {
            console.log(res.data.w_auth);
            if (res.data.loginSuccess) {
                axios.defaults.headers.common['w_auth'] = res.data.w_auth;
                console.log(res.data)
                setStorage("uid", res.data);
                window.location.pathname = `/dash`
            }
            else alert("Enter correct details")
        })
            .catch(function () {

            })
            else alert("Enter 10 digit number")


    }
    render() {
        return (


            <div className="login">
                <Card className="login-card">
                    <CardBody>
                        <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '50%' } }>
                        </CardTitle>

                        <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="email">Phone</label>
                                    <input type="number" pattern="[0-9]*" className="form-control " name="email" onChange={ (event) => this.handleUserInput(event) } />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control"
                                        name="password" onChange={ (event) => this.handleUserInput(event) } />
                                </div>
                                <div>
                                    <button id="focus" type="submit" className="btn btn-primary" onClick={ this.submitBtn } >
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </div >


        );
    }
}

export default Login;