import React, { Component } from 'react';
import { link, route, getStorage, isNumber } from '../urls';
import { Row, Col, Card, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';
import NumberCount from '../NumberCount'


class Updates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            activeTab: 2,
            compcount: 0,
            eqpcount: 0,
            reqcount: 0,
            fedcount: 0,
            f1: 0,
            f2: 0,
            f3: 0,
            f4: 0,
            f5: 0,
            f6: 0,

        }

    }
    componentWillMount() {

        if (getStorage('aid')) {
            const obj = getStorage('aid')
            this.state.data = obj;
            console.log(obj)
            console.log(obj.companyCount)
            console.log(obj.equipmentCount)
            console.log(obj.feedbackCount)
            console.log(obj.requirementCount)
            console.log(obj.companyEquipmentMap)
            var arr = obj.companyEquipmentMap
            var f1t = 0, f2t = 0, f3t = 0, f4t = 0, f5t = 0, f6t = 0;
            arr.map(d => {
                if (d.count < 5) f1t++;
                else if (d.count >= 5 && d.count < 10) f2t++;
                else if (d.count >= 10 && d.count < 20) f3t++;
                else if (d.count >= 20 && d.count < 50) f4t++;
                else if (d.count >= 50 && d.count < 100) f5t++;
                else if (d.count >= 10) f6t++;
            })
            console.log(f1t,f2t,f3t,f4t,f5t,f6t)
            this.setState({
                compcount: this.state.data.companyCount,
                eqpcount: this.state.data.equipmentCount,
                reqcount: this.state.data.requirementCount,
                fedcount: this.state.data.feedbackCount,
                f1:f1t,
            f2:f2t,
            f3:f3t,
            f4:f4t,
            f5:f5t,
            f6:f6t,

            })
            console.log(this.state)

        }
        else {
            
            route("/admlogin")
        }

    }

    componentDidMount() {

        console.log(this.state)

    }
    render() {
        return (
            <div className="updates">
                <Row className="" >
                    <Col className="home-col" >
                        <Card >
                            <CardBody>
                                <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    <NumberCount value={ this.state.compcount } />
                                </CardTitle>
                                <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    Companies
                                    </CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="home-col">
                        <Card>
                            <CardBody>
                                <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    <NumberCount value={ this.state.eqpcount } />
                                </CardTitle>
                                <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                    Equipments
                                    </CardSubtitle>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col className="home-col">
                        <Card>
                            <CardBody>
                                <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    <NumberCount value={ this.state.reqcount } />
                                </CardTitle>
                                <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                    Requirements
                                    </CardSubtitle>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col className="home-col">
                        <Card>
                            <CardBody>
                                <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    <NumberCount value={ this.state.fedcount } />
                                </CardTitle>
                                <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                    Feedback
                                    </CardSubtitle>
                            </CardBody>
                        </Card>

                    </Col>

                </Row>
                <Row >
                    <Col className="home-col" >
                        <Card >
                            <CardBody>
                                <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    <NumberCount value={ this.state.f1 } />
                                </CardTitle>
                                <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    Less than 5
                                    </CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="home-col">
                        <Card>
                            <CardBody>
                                <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    <NumberCount value={ this.state.f2 } />
                                </CardTitle>
                                <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                    5 to 10
                                    </CardSubtitle>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col className="home-col">
                        <Card>
                            <CardBody>
                                <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    <NumberCount value={ this.state.f3 } />
                                </CardTitle>
                                <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                    10 to 20
                                    </CardSubtitle>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col className="home-col">
                        <Card>
                            <CardBody>
                                <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    <NumberCount value={ this.state.f4 } />
                                </CardTitle>
                                <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                    20 to 50
                                    </CardSubtitle>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col className="home-col">
                        <Card>
                            <CardBody>
                                <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    <NumberCount value={ this.state.f5 } />
                                </CardTitle>
                                <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                    50 to 100
                                    </CardSubtitle>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col className="home-col">
                        <Card>
                            <CardBody>
                                <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>

                                    <NumberCount value={ this.state.f6 } />
                                </CardTitle>
                                <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                                    100 and more
                                    </CardSubtitle>
                            </CardBody>
                        </Card>

                    </Col>

                </Row>
            </div>
        );
    }
}

export default Updates;