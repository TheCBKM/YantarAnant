import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, CardSubtitle, CardBody ,Badge} from 'reactstrap';
import SlideHome from './SlideHome';
import Question from './Question';
import GetInTouch from './GetInTouch';
import NumberCount from './NumberCount';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';

import Collapse from 'react-bootstrap/Collapse'



class Home extends Component {
    constructor(props, context) {
        super(props, context);
      
          this.state = {
            open: false,
          };
        }
      
    render() {const { open } = this.state;
        return (
            <div>
                 <AppNavbar/>
                 
                <div className="home-page-sec1"  >
                    <Row className="home-row " >
                        <Col className="home-col" >
                            <Card >
                                <CardBody>
                                    <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                   
                                        <NumberCount value={2500}/>
                                    </CardTitle>
                                    <i className='fa fa-handshake-o fa-5x' aria-hidden='true'></i>
                                    <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                        Associated Companies
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="home-col">
                            <Card>
                                <CardBody>
                                    <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                        
                                        <NumberCount value={15000}/>
                                    </CardTitle>
                                    <i  className='fa fa-truck fa-5x myicon' aria-hidden='true'></i>
                                    <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                        Machine Available
                                    </CardSubtitle>
                                </CardBody>
                            </Card>

                        </Col>
                       

                    </Row>
                    
                </div>
                <div className="home-page-sec2">
                    <h1 style={ { textAlign: "center", fontFamily: " Helvetica", fontSize: "calc(2em + 1vw)" } }>What We offer</h1>
                    <hr/>
                    <Row className="home-row2 ">
                        <Col className="home-col2" >
                            <Card >
                                <CardBody>
                                    <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                    Rent Equipment
                                    </CardTitle>
                                    <i className='fa fa-handshake-o fa-5x' aria-hidden='true'></i>
                                    <CardSubtitle style={ { fontSize: 'calc(.5em + 1vw)', paddingTop: '1em' ,lineHeight:"1.5em"} }>
                                        more than 100 types of construction equipments.Available all across India to choose from 15,000 Available Equipments
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="home-col2">
                            <Card>
                                <CardBody>
                                    <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                       Operator
                                    </CardTitle>
                                    <i className='fa fa-truck fa-5x' aria-hidden='true'></i>
                                    <CardSubtitle style={ { fontSize: 'calc(.5em + 1vw)', paddingTop: '1em',lineHeight:"1.5em" } }>
                                        Experienced Operator all over India choose from 5000 Available Operators.
                                    </CardSubtitle>
                                </CardBody>
                            </Card>

                        </Col>
                        <Col className="home-col2" >
                            <Card>
                                <CardBody>
                                    <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                        Used Equipments                                    </CardTitle>
                                    <i className='fa fa-user-plus fa-5x' aria-hidden='true'></i>
                                    <CardSubtitle style={ { fontSize: 'calc(.5em + 1vw)', paddingTop: '1em' ,lineHeight:"1.5em"} }>
                                        Choose From Vast Range of used Equipments from India.
                                                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>



                    <div style={ { textAlign: "center", fontFamily: " Helvetica", fontSize: "calc(1em + 1vw)" } }>Our Equipment</div>
                    <h4 style={ { textAlign: "center", fontFamily: " Helvetica", fontSize: "calc(.5em + 1vw)" }}>Enormous pool of equipment to meet all our client requirement.</h4>
                    <hr/>
                    <SlideHome />

                
        <div
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
         <div style={ { textAlign: "center", fontFamily: " Helvetica", fontSize: "calc(1em + 1vw)" } }>FAQ</div>
                    <h4 style={ { textAlign: "center", fontFamily: " Helvetica", fontSize: "calc(.5em + 1vw)" }}>Frequently Asked Questions<Badge color="secondary">Click Here</Badge></h4>
                      <hr/>  
        </div>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
          <Question style={{align:"center"}}
                    question="What is Yantaranant"
                    answer="The Yantranant is a digital platform creating a bridge between supply and demand for Construction equipments. A simple yet profound solution for renting/leasing of equipment. Yantranant by utilizing vast pools of companies brings in a fast and efficient mode of communication for construction industry."
                    />
                    <Question style={{align:"center"}}
                    question="How do I sign up ?"
                    answer="Just fill our enquiry form on www.yantranant.com and our team will get in touch with you or send a mail at contact@yantranant.com , info@yantranant.com"
                    />
                    <Question style={{align:"center"}}
                    question="How much time it takes for approval of a company?"
                    answer="Yantranant generally approves a company which meets qualifying criteria in 3 working days."
                    />
                    <Question style={{align:"center"}}
                    question="How do I get paid?"
                    answer="Yantranant is just a facilitator and acts as a bridge between supply and demand. We act as a matchmaker and connect two parties. All the terms and condition of work/payment should be discussed among partied them-self’s were yantranant has no role to play. So yantranant takes no responsibility of payment."
                    />
          </div>
        </Collapse>              
        <GetInTouch/>
        <Row style={{boxShadow:" 8px 4px 8px 0 rgb(0, 0, 0,0,0.2)"}}>
            <Col style={{textAlign:"center"}} >
                <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                      <h4 style={{fontSize:"calc(.5em + 1vw)"}}> Phone</h4>
                    <a target="_blank " href="https://api.whatsapp.com/send?phone=917067117305&text=&source=&data=">
                   <i class="fa fa-whatsapp"></i> +91-70671-17305<Badge>click</Badge></a><br/>
                    +91-62648-70383<br/>
                    +91-80198-08705<br/>
            </Col>
            <Col style={{textAlign:"center"}}>
                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                <h4 style={{fontSize:"calc(.5em + 1vw)"}}>Email</h4>
                contact@yantranant.com<br/>
                    info@yantranant.com<br/>
            </Col>
            <Col style={{textAlign:"center"}}>
                <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                <h4 style={{fontSize:"calc(.5em + 1vw)"}}>Address</h4>
                N-9 Shreeji Valley Pragati Vihar,<br/>
                Bicholi Mardana, Indore, <br/>
                Madhya Pradesh 452016<br/>
            </Col>
            </Row>
                   </div>
                   <AppFooter/>
            </div>
        );
    }
}

export default Home;