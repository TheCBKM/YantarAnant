import React from 'react';
import {Route,Switch} from 'react-router-dom' ;
import Carrer from './Career';
import Home from './Home';
import Contact from './Contact';
import AboutUs from './AboutUs';
import RentalServices from './RentalServices';
import Login from './Login';
import DashBoard from './DashBoard';
import AdminDash from './Admin/AdminDash';
import AdminLogin from './Admin/AdminLogin';
import FilterCompany from './Admin/FilterCompany';
import ResetPassword from './ResetPassword';

const AppRouter = ()=>(
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/career" component={Carrer}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/aboutus" component={AboutUs}></Route>
        <Route exact path="/rentalservices" component={RentalServices}></Route>
        <Route exact path="/login" component={Login}></Route>  
        <Route exact path="/dash" component={DashBoard}></Route>  
        <Route exact path="/adm" component={AdminDash}></Route>
        <Route exact path="/admlogin" component={AdminLogin}></Route>
        <Route exact path="/filter" component={FilterCompany}></Route>
        <Route exact path="/reset" component={ResetPassword}></Route>

    </Switch>
) 
export default AppRouter;