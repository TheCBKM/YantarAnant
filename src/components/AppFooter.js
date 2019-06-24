import React, { Component } from 'react';
import { Footer, FooterSection } from 'react-mdl';
import { Row, Col } from 'reactstrap';
import { msgp } from '../Appimages';

class AppFooter extends Component {
    render() {
        return (
            <div>
                <Footer className="footer">
                    <FooterSection type="middle">
                        <Row>
                            <Col  >
                                MESSAGING PARTNER<br />
                                <img src={ msgp } alt="MESSAGING" style={ { width: "50%", minWidth: "100px", padding: "10px" } } />
                            </Col>
                            <Col    >
                                INFORMATION
                            <br />
                                <a>About Us</a><br />
                                <a>Career</a><br />
                                <a>Blog</a><br />
                            </Col>
                            <Col  >
                                POLICIES
                            <br />
                                <a>Terms &amp; Conditions</a><br />
                                <a>Privacy Policy</a><br />
                                <a>Subscription Terms</a><br />
                            </Col>
                            <Col   >
                                Contact Us <br />
                                <a>FAQ</a><br />
                                <a>Forum</a><br />
                                <a>SUPPORT</a><br />
                            </Col><Col  >


                                MY ACCOUNT
                            <br />
                                <a>Login / Signup
                                </a><br />
                                <a>
                                    Registration</a><br />

                            </Col>
                        </Row>
                        <Row >
                            <Col style={ { textAlign: "center", color: "white" } } ><a style={ { all: "unset" } } target="_blank" href="https://www.facebook.com/Yantranant-2116052621808787/"><i class="fa fa-facebook fa-3x" aria-hidden="true"></i></a></Col>
                            <Col style={ { textAlign: "center", color: "white" } }><a style={ { all: "unset" } } target="_blank" href="https://twitter.com/yantranant"><i href="" class="fa fa-twitter fa-3x" aria-hidden="true"></i></a></Col>
                            <Col style={ { textAlign: "center", color: "white" } }><a style={ { all: "unset" } } target="_blank" href="https://www.youtube.com/channel/UCDbKoIzPtwNxMk1rB4d6EuQ?guided_help_flow=3"><i href="" class="fa fa-youtube fa-3x" aria-hidden="true"></i></a></Col>
                        </Row>
                        <Row><Col style={ { textAlign: "center", color: "white" ,paddingTop:"2%"}}>
COPYRIGHT © 2018.ALL RIGHTS RESERVED.DESIGNED BY <strong>YANTRANANT</strong></Col></Row>
                    </FooterSection>
                </Footer>

            </div>
        );
    }
}

export default AppFooter;