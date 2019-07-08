import React, { Component } from 'react';
import { Tab, Tabs } from 'react-mdl';
import ToApprove from './ToApprove';
import Approved from './Approved';
import DissApprove from './DissApprove';


class BuySell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            activeTab: 0
        }
    }
    toggelCategories() {
        if (this.state.activeTab == 0) {
            return (<div><ToApprove/></div>)
        }
        else if (this.state.activeTab == 1) {
            return (<div><Approved/></div>)
        }
        else if (this.state.activeTab == 2) {
            return (<div><DissApprove/></div>)
        }
       
    }

    render() {
        return (
            <div>
                  <Tabs activeTab={ this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId }) } ripple>
                    <Tab className="dash-tabh" ><h1 className="dash-tab" >To Approve      </h1></Tab>
                    <Tab className="dash-tabh"  ><h1 className="dash-tab">Approved</h1></Tab>
                    <Tab className="dash-tabh"  ><h1 className="dash-tab">Diss-Approved </h1> </Tab>                 
                </Tabs>
                <section className="admin-sec">
                    { this.toggelCategories() }
                    { console.log(this.state.activeTab) }
                </section>
            </div>
        );
    }
}

export default BuySell;