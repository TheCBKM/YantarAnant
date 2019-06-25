
import React, { Component } from 'react';
import { link, route, getStorage, removeStorage } from './urls';
import { Tab, Tabs } from 'react-mdl'
import { Row, Col, Nav } from 'reactstrap'
import Equipment from './Equipment';
import RentEquipment from './RentEquipment';
import LeaseEquipment from './LeaseEquipment';
import FeedBack from './FeedBack';
import { logo } from '../Appimages'
import ViewProfile from './ViewProfile';


class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            activeTab: 2
        }

    }

    componentWillMount() {

        if (getStorage('uid')) {
            const obj = getStorage('uid')
            this.state.data = obj;
            console.log(obj)
        }
        else {

            route("/login")

        }



    }

    async componentDidMount() {


    }
    toggelCategories() {
        if (this.state.activeTab == 0) {
            return (<Equipment />)
        }
        else if (this.state.activeTab == 1) {
            return (<RentEquipment />)
        }
        else if (this.state.activeTab == 2) {
            return (<LeaseEquipment />)
        }
        else if (this.state.activeTab == 3) {
            return (<div style={ { paddingLeft: "20%", paddingRight: "20%" } }><FeedBack /></div>)
        }
        else if (this.state.activeTab == 4) {
            return (<div style={ { paddingLeft: "20%", paddingRight: "20%", paddingTop: "5%" } }><ViewProfile /></div>)
        }
    }
    render() {
        const data = this.state.data
        const usr = data.user;

        return (
            <div navbar-dash>
                <div id="cover-spin"></div>


                <nav class="navbar navbar-dash " style={ { backgroundColor: " #fffc00;" } }>

                    {/*                     
                    <button class="btn btn-outline-primary my-2 my-sm-1 " type="submit">
                        <i style={ { color: "orange" } } class="fa fa-user  fa-3x" aria-hidden="true"></i><br/>
                        Profile
                    </button> */}
                    <Row className="navrow">
                        <Col className="navcol">

                            <img className="dash-logo" src={ logo } alt="YantAnant" />

                        </Col>
                        <Col className="navcol">
                            <div className="navhed"> NAME</div>
                            {(usr.company)? usr.company.name:"---" }
                        </Col>
                        <Col className="navcol">
                            <div> CONTACT PERSON</div>
                            { usr.company.contactPerson }
                        </Col>
                        <Col className="navcol">
                            <div >  CONTACT </div>
                            { usr.company.contactNumber }
                        </Col>
                        <Col className="navrow">

                            <i onClick={ () => { removeStorage('uid'); route("/login") } } style={ { color: "orange", textSize: "200px" } } class="fa fa-sign-out fa-3x" aria-hidden="true"><div style={ { fontSize: "calc(.2em + 1vh)" } }>Logout</div></i>


                        </Col>



                    </Row>



                </nav>
                <div style={ { paddingBottom: "200px !important" } } >

                    <Tabs activeTab={ this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId }) } ripple>
                        <Tab className="dash-tabh" ><h1 className="dash-tab" >Equipment</h1></Tab>
                        <Tab className="dash-tabh"  ><h1 className="dash-tab">Rent Equipment</h1></Tab>
                        <Tab className="dash-tabh"  ><h1 className="dash-tab">Lease Equipment </h1> </Tab>
                        <Tab className="dash-tabh" ><h1 className="dash-tab">Feed Back</h1> </Tab>
                        <Tab className="dash-tabh" ><h1 className="dash-tab">                            <i style={ { color: "orange", textSize: "200px" } } class="fa fa-user" aria-hidden="true"></i></h1> </Tab>


                    </Tabs>

                    <Tabs activeTab={ this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId }) } ripple>
                        <Tab className="dash-tabh" ><h1 className="dash-tab" >मशीन </h1></Tab>
                        <Tab className="dash-tabh"  ><h1 className="dash-tab">मशीन किराये से लें </h1></Tab>
                        <Tab className="dash-tabh"  ><h1 className="dash-tab">मशीन किराये से दे</h1> </Tab>
                        <Tab className="dash-tabh" ><h1 className="dash-tab">प्रतिक्रिया</h1> </Tab>

                        <Tab className="dash-tabh" ><h1 className="dash-tab">Profile</h1> </Tab>
                    </Tabs>
                    <section>
                        { this.toggelCategories() }
                        { console.log(this.state.activeTab) }
                    </section>

                </div>
                           
            </div>


        );
    }
}

DashBoard.propTypes = {

};


export default DashBoard;