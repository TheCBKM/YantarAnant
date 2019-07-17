
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
import SlideHome from './SlideHome';
import { add1 } from "../Appimages"
import AddProduct from './BuySell/AddProduct';
import ViewAllProduct from './BuySell/ViewAllProduct';
import ViewProducts from './BuySell/ViewProducts';


class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            activeTab: 5
        }

    }
    changeTab(i) {
        // alert(i)
        this.setState({
            activeTab: i
        })
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

    componentDidMount() {

        document.title = 'Dashboard-YantarAnant';


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
        else if (this.state.activeTab == 5) {
            return (<div style={ { paddingLeft: "20%", paddingRight: "20%", paddingTop: "5%" } }><AddProduct /></div>)
        }
        else if (this.state.activeTab == 6) {
            return (<ViewAllProduct />)
        }
        else if (this.state.activeTab == 7) {
            return (<ViewProducts />)
        }
    }
    render() {
        const data = this.state.data
        const usr = data.user;

        return (
            <div navbar-dash>
                <div id="cover-spin"></div>
                <nav class=" navbar-dash " style={ { backgroundColor: " #fffc00;" } }>
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
                            <div className="navhed">COMPANY NAME</div>
                            { (usr.company) ? usr.company.name : "---" }
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
                <Row>
                    <Col md={ 2 }>
                        <div class="sidenav" id="side-nav">
                            <a onClick={ () => this.changeTab(0) } href="#main-content">Equipment<br />मशीन</a>
                            <br />
                            <a onClick={ () => this.changeTab(1) } href="#main-content">Rent Equipment<br />मशीन किराये से लें</a>
                            <br />
                            <a onClick={ () => this.changeTab(2) } href="#main-content">Lease Equipment<br />मशीन किराये से दे</a>
                            <br />
                            <a onClick={ () => this.changeTab(3) } href="#main-content">Feed Back<br />प्रतिक्रिया</a>
                            <br />
                            <a onClick={ () => this.changeTab(5) } href="#main-content">Sell<br /></a>
                            <a onClick={ () => this.changeTab(6) } href="#main-content">Buy<br /></a>
                            <a onClick={ () => this.changeTab(7) } href="#main-content">your product</a>
                            <a onClick={ () => this.changeTab(4) } href="#main-content"><i style={ { color: "orange", textSize: "200px" } } class="fa fa-user fa-3x" aria-hidden="true"></i></a>
                        </div></Col>
                    <Col md={ 10 }>  <div style={ { paddingBottom: "200px !important" } } >


                        <section id="main-content">
                            { this.toggelCategories() }
                            { console.log(this.state.activeTab) }
                        </section>
                    </div>
                        <div id="mybutton">
                            <a href="#side-nav">  <button class="feedback" ><i style={ { color: "orange", textSize: "200px" } } class="fa fa-arrow-up fa-3x" aria-hidden="true"></i></button></a>
                        </div>
                        <div class="ex-fixed-box"></div>
                    </Col>
                </Row>
            </div>
        );
    }
}

DashBoard.propTypes = {

};


export default DashBoard;