import React, { Component } from 'react';
import { Tab, Tabs } from 'react-mdl'
import { link, route, getStorage, isNumber } from '../urls';
import axios from 'axios';
import Updates from './Updates';
import ViewCompany from './ViewCompany';
import MasterCategory from './MasterCategory'
import Reqirments from './Reqirments'
import FeedBack from './FeedBack'
import { Row, Col, Nav } from 'reactstrap'
import { logo } from '../../Appimages'
import { removeStorage } from '.././urls';


class AdminDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            activeTab: 2
        }

    }
    componentDidMount() {
        document.title = 'Admin-YantarAnat';
      }
    componentWillMount() {

        if (getStorage('aid')) {
            const obj = getStorage('aid')
            this.state.data = obj;
            console.log(obj)
        }
        else {

            route("/admlogin");
        }

    }

    toggelCategories() {
        if (this.state.activeTab == 0) {
            return (<div><MasterCategory /></div>)
        }
        else if (this.state.activeTab == 1) {
            return (<div><ViewCompany /></div>)
        }
        else if (this.state.activeTab == 2) {
            return (<div><Updates /></div>)
        }
        else if (this.state.activeTab == 3) {
            return (<div><Reqirments /></div>)
        }
        else if (this.state.activeTab == 4) {
            return (<div><FeedBack /></div>)
        }
    }

    render() {
        const data = this.state.data
        const usr = data.user;
        return (
            <div>
                <nav class="navbar navbar-dash " style={ { backgroundColor: " #fffc00;" } }>
                    <Row className="navrow">
                        <Col className="navcol">

                            <img className="dash-logo" src={ logo } alt="YantAnant" />

                        </Col>
                        <Col className="navcol">
                            <div className="navhed"> Company NAME</div>
                            { usr.company.name }
                        </Col>
                        <Col className="navcol">
                            <div> ADMIN</div>
                            { usr.name }
                        </Col>
                        <Col className="navcol">
                            <div >  CONTACT </div>
                            { usr.company.contactNumber }
                        </Col>
                        <Col className="navrow">

                            <i onClick={ () => { removeStorage('aid'); route("/admlogin"); } } style={ { color: "orange", textSize: "200px" } } class="fa fa-sign-out fa-3x" aria-hidden="true"><div style={ { fontSize: "calc(.2em + 1vh)" } }>Logout</div></i>


                        </Col>



                    </Row>
                </nav>

                <Tabs activeTab={ this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId }) } ripple>
                    <Tab className="dash-tabh" ><h1 className="dash-tab" >Master Category       </h1></Tab>
                    <Tab className="dash-tabh"  ><h1 className="dash-tab">Company</h1></Tab>
                    <Tab className="dash-tabh"  ><h1 className="dash-tab">Updates </h1> </Tab>
                    <Tab className="dash-tabh" ><h1 className="dash-tab">Requirments</h1> </Tab>
                    <Tab className="dash-tabh" ><h1 className="dash-tab">Feed Back</h1> </Tab>


                </Tabs>
                <section className="admin-sec">
                    { this.toggelCategories() }
                    { console.log(this.state.activeTab) }
                </section>
                    
            </div>
        );
    }
}

export default AdminDash;