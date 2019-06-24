import React, { Component } from 'react';
import { link, location, getStorage ,isNumber} from '../urls';
import { Tab, Tabs } from 'react-mdl'
import Category from './Category';
import SubCategory from './SubCategory';


class MasterCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            activeTab: 0
        }

    }
    componentWillMount() {

        if (getStorage('aid')) {
            const obj = getStorage('aid')
            this.state.data = obj;
            console.log(obj)                      
        }
        else {
            window.location.pathname=`/admlogin`
        }

    }
    toggelCategories() {
        if (this.state.activeTab == 0) {
            return (<div><Category style={{paddingTop:"100px"}}/></div>)
        }
        else if (this.state.activeTab == 1) {
            return (<div><SubCategory/></div>)
        }
       
    }
    render() {
        return (
            <div>
                <Tabs activeTab={ this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId }) } ripple>
                    <Tab className="dash-tabh" ><h1 className="dash-tab" > Category       </h1></Tab>
                    <Tab className="dash-tabh"  ><h1 className="dash-tab">Sub Category</h1></Tab>                  

                </Tabs>
                <section>
                    { this.toggelCategories() }
                    { console.log(this.state.activeTab) }
                </section>
            </div>
        );
    }
}

export default MasterCategory;