import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardBody, Col, } from 'reactstrap';
import Row from 'reactstrap/lib/Row';

class Register extends Component {
    render() {
        return (
            <div  className="login" style={{height:"200%"}}>
                <a style={{fontSize:"20px",color:"blue"}} href="/">Back</a> 

                <Row>
                    <Col>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdKQBL-HvEXsgKPRE9r9GWKwiR4X6ZXr_mRMtFpZl1lxoihQQ/viewform?embedded=true" width="100%" height="1000%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Register;