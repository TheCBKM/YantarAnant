import React, { Component } from 'react';
import { Row, Col,Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';
import Spinner from 'react-bootstrap/Spinner'
import { add1 } from '../Appimages'
import axios from 'axios';

import { link, route, setStorage } from './urls';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            modal: false,
            modaltext: '',
            adebtn: true

        }
        this.submitBtn = this.submitBtn.bind(this);
        this.toggle = this.toggle.bind(this);
        this.registerBtn = this.registerBtn.bind(this);

    }
    registerBtn() {
        route('/register')
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
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    submitBtn() {
        if (this.state.email.length === 10) {
            this.setState({
                adebtn: false
            })

            axios.post(`${link}/company/login`, {
                contactNumber: this.state.email,
                password: this.state.password
            }).then((res) => {
                console.log(res.data.w_auth);
                if (res.data.loginSuccess) {
                    axios.defaults.headers.common['w_auth'] = res.data.w_auth;
                    console.log(res.data)
                    setStorage("uid", res.data);
                    route("/dash")
                }
                else {
                    if (res.data.message) {
                        this.setState({
                            modal: true,
                            modaltext: res.data.message
                        })
                        this.setState({
                            adebtn: true
                        })
                    }
                }
            })
                .catch(function () {

                })
        }
        else alert("Enter 10 digit number")


    }
    render() {
        return (
            <div className="login">

                <Card className="login-card">
                    <CardBody>
                        <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '20%' } }>
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
                                    <Row>
                                        <Col>
                                            <button id="focus" type="submit" className="btn btn-primary" onClick={ this.submitBtn } >

                                                { this.state.adebtn ? <div>Sign up</div> : <div><Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                /> Loading</div> }
                                            </button>
                                        </Col>
                                        <Col>
                                            <button id="focus" type="submit" className="btn btn-primary" onClick={ this.registerBtn } >
                                                Register
                                    </button></Col>
                                    </Row>

                                </div>
                            </div>
                        </CardSubtitle>
                    </CardBody>
                </Card>

                <div class="fixed-box" >
                    {/* <h3 style={ { fontSize: "calc(.5em + 1vw)", color: "blue" } }> */ }
                    <img style={ { height: "100%" } } src={ add1 } alt="add1" />
                    <marquee>Space for Advertisements........... विज्ञापन के लिए स्थान </marquee>
                    {/* </h3> */ }
                </div>
                <div class="ex-fixed-box"></div>


                < Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>
                    <ModalHeader toggle={ this.toggle }>
                        <div>
                            Details
                            </div>
                    </ModalHeader>
                    <ModalBody>

                        <h4>{ this.state.modaltext }<br /><strong>Call us at:- 7067117305</strong></h4>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={ this.toggle }>Close</Button>
                    </ModalFooter>
                </Modal>


            </div >

        );
    }
}

export default Login;