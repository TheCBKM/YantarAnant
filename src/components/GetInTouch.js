import React, { Component } from 'react';
import { Button, Row, Col, Alert, Badge } from 'reactstrap';
import Collapse from 'react-bootstrap/Collapse';

import { link, route, setStorage } from './urls';
import axios from 'axios';

class GetInTouch extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            name: '',
            number: '',
            description: '',
            pinCode: '',
            address: '',
            email: ''
        };
        this.submitBtn = this.submitBtn.bind(this);

    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    submitBtn() {
        const sendData = {
            name: this.state.name,
            mobile: this.state.number,
            description: this.state.description,
            pinCode: this.state.pinCode,
            address: this.state.address,
            email: this.state.email
        }
        console.log(sendData)
        axios.post(`${link}/enquiry/save`, sendData).then((res) => {
            console.log(res.data)
            route("/")
        })
            .catch(function (e) {
                console.log(e)
            })
    }


    render() {
        const { open } = this.state;
        return (
            <Row>
                <Col className="Question">

                    <lable
                        onClick={ () => this.setState({ open: !open }) }
                        aria-controls="example-collapse-text"
                        aria-expanded={ open }
                        style={ { align: "center", } }
                    >

                        <div style={ { textAlign: "center", paddingTop: "3%", fontFamily: " Helvetica", fontSize: 'calc(.5em + 1vw)' } }>
                            <Alert color="primary">
                                Get In Touch<Badge color="secondary">Click Here</Badge>
                            </Alert></div>

                    </lable>

                    <hr style={ { backgroundColor: " rgb(35, 176, 201)", width: "50%", align: "right !important" } } />
                    <Collapse in={ this.state.open }>

                        <div id="example-collapse-text" style={ { textAlign: "center", paddingLeft: "5%", paddingRight: "5%", fontSize: 'calc(.5em + .8vw)' } }>
                            <h4>Enter you Details</h4>
                            <Row>
                                <Col>
                                    <label >Name</label>
                                    <input type="text" name="name" onChange={ (event) => this.handleUserInput(event) } />
                                </Col>
                                <Col>
                                    <label >Phone</label>
                                    <input type="text" name="number" onChange={ (event) => this.handleUserInput(event) } />
                                </Col>
                            </Row>
                            <Row>

                                <Col>
                                    <label>E-mail</label>
                                    <input type="text" name="email" onChange={ (event) => this.handleUserInput(event) } />
                                </Col>
                            </Row>
                            <Row>

                                <Col>
                                    <label>Address</label>
                                    <input type="text" name="address" onChange={ (event) => this.handleUserInput(event) } />
                                </Col>
                                <Col>
                                    <label>Pin Code</label>
                                    <input type="text" name="pinCode" onChange={ (event) => this.handleUserInput(event) } />
                                </Col>
                            </Row>
                            <Row>

                                <Col>
                                    <label>Description</label>
                                    <input type="text" name="description" onChange={ (event) => this.handleUserInput(event) } />
                                </Col>
                            </Row>
                            <Row style={ { align: "center" } }>
                                <Col> <button id="focus" type="submit" className="btn btn-primary" onClick={ this.submitBtn } >Submit
                                </button> </Col>
                            </Row>
                        </div>
                    </Collapse>
                </Col>
            </Row>
        );
    }
}

export default GetInTouch;