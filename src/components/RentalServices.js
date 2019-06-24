import React, { Component } from 'react';
import RentalCard from './RentalCard'
import { Row, Col, Collapse, Badge } from 'reactstrap'
import Question from './Question';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import {
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    asphaltPaver,
    backhoeLoader,
    concretePump,
    excavator,
    pilingAndDrillingRig,
    rideOnRoller,
    roller,
    selfloadingmixer,
    slipformpaver,
    tipper,
    towercrane,
    trailertruck,
    transitmixer,
    truckMountedCrane,
    boomPlace,
} from '../Appimages';

class RentalServices extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }
    render() {
        const { open } = this.state;

        return (
            <div>
                <AppNavbar />
                <div className="rental-sec1"><div className="rental-sec1-headding">
                    <div style={ { fontFamily: " Gorgia" } }>Rental</div>
                    <div style={ { fontFamily: " Helvetica", fontSize: "calc(.5em + .2vw)", padding: "2%", color: "black", lineHeight: "100%" } }>Yantranant is a digital platform for rental of machine used in construction industry. With its enormous pool of rental companies across India, hiring of equipment happens in a smooth and faster way. Welcome to yantranant way of hiring equipment.</div>


                </div></div>

                <div style={ { textAlign: "center", fontFamily: " Helvetica", fontSize: "calc(1em + 1vw)", padding: "5%", color: "orangered" } }>Equipments For Rent</div>
                <hr />
                <Row>
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Asphalt Paver"
                            img={ asphaltPaver }
                            value={ 200 }
                        />

                    </Col>
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Backhoe Loader"
                            img={ backhoeLoader }
                            value={ 120 }
                        />

                    </Col >
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Concrete Pump"
                            img={ concretePump }
                            value={ 180 }
                        />
                    </Col>
                </Row>


                <Row>
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Excavator"
                            img={ excavator }
                            value={ 200 }
                        />

                    </Col>
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Piling And Drilling Rig"
                            img={ pilingAndDrillingRig }
                            value={ 300 }
                        />

                    </Col >
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Ride On Roller"
                            img={ rideOnRoller }
                            value={ 160 }
                        />
                    </Col>
                </Row>


                <Row>
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Roller"
                            img={ roller }
                            value={ 100 }
                        />

                    </Col>
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Self Loading Mixer"
                            img={ selfloadingmixer }
                            value={ 170 }
                        />

                    </Col >
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Slip Porm Paver"
                            img={ slipformpaver }
                            value={ 190 }
                        />
                    </Col>
                </Row>



                <Row>
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Tipper"
                            img={ tipper }
                            value={ 110 }
                        />

                    </Col>
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Tower Crane"
                            img={ towercrane }
                            value={ 150 }
                        />

                    </Col >
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Boom Place"
                            img={ boomPlace }
                            value={ 110 }
                        />
                    </Col>
                </Row>




                <Row>
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Transit Mixer"
                            img={ transitmixer }
                            value={ 110 }
                        />

                    </Col>
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Truck Mounted Crane"
                            img={ truckMountedCrane }
                            value={ 150 }
                        />

                    </Col >
                    <Col sm="6" md="4" className="rental-col">
                        <RentalCard
                            name="Trailer Truck"
                            img={ trailertruck }
                            value={ 110 }
                        />
                    </Col>
                </Row>
                <div className="rental-page-sec2 " style={ { paddingTop: "2%" } } >
                    <div style={ { textAlign: "center", fontFamily: " Helvetica", fontSize: "calc(1em + 1vw)" } }>FAQ</div>
                    <h4 style={ { textAlign: "center", fontFamily: " Helvetica", fontSize: "calc(.5em + 1vw)" } }>Frequently Asked Questions <Badge color="secondary">For Rental</Badge></h4>
                    <hr />
                    <Question
                        question="How do I register as equipment supplier on yantranant?"
                        answer="Call yantranant customer care at 0731-4984775, Provide all the details and necessary documents of your company. After verification you will be registered and you will be notified when you are registered."
                    />
                    <Question
                        question="How to rent equipment using yantranant platform?"
                        answer="Call yantranant customer care at 0731-4984775, Provide all the details and necessary documents of your company. After verification you will be registered and you will be notified when you are registered."
                    />
                    <Question
                        question="What are the charges for using yantranant platform?"
                        answer="Call Yantranant customer care 0731-4984775, for details of charges."
                    />
                    <Question
                        question="Is there chain of commission agent involved in yantranant?"
                        answer="Yantranant is a technology driven platform and only equipment owners after stringent verification are added on our platform. Stringent verification ensures that it’s very difficult for commission agent to get access to yantranant platform."
                    />
                    <Question
                        question="How will payment for my equipment be done?"
                        answer="Yantranant is a connecting platform for equipment suppliers and leasers. All the operational/financial discussion related to equipment is whole and sole responsibility of supplier and leaser. Yantranant role is just limited to connecting suppliers and leasers."
                    />
                </div>
                <AppFooter/>
            </div>
        );
    }
}

export default RentalServices;