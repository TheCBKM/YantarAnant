import React, { Component } from 'react';
import { Row, Col, Card, CardSubtitle, CardBody } from 'reactstrap';
import {s1,s2,s3} from '../Appimages';

class SlideHome extends Component {
    render() {
        return (
            <div>
                <Row className="home-row ">
                        <Col className="home-col" style={{marginTop:"2%"}} >
                            <Card style={{border: "none"}} >
                                <CardBody>
                                    <img src={s1} alt="s1" style={{maxHeight:"100px"}}/>
                                    
                                    <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)' } }>
                                        Senseor Paver
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="home-col" style={{marginTop:"2%"}}>
                        <Card style={{border: "none"}} >
                                <CardBody>
                                    <img src={s2} alt="s1"style={{maxHeight:"100px"}}/>
                                   
                                    <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)',} }>
                                        All terrain crane 
                                    </CardSubtitle>
                                </CardBody>
                            </Card>

                        </Col>
                        <Col className="home-col" style={{marginTop:"2%"}}>
                        <Card style={{border: "none"}}>
                                <CardBody>
                                    <img src={s3} alt="s1" style={{maxHeight:"100px"}}/>
                                 
                                    <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)'} }>
                                        Hydra
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
            </div>
        );
    }
}

export default SlideHome;