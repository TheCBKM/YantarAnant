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
import AddProduct from './BuySell/AddProduct';
import ViewAllProduct from './BuySell/ViewAllProduct';
import BuySell from './Admin/BuySell';
import ViewProducts from './BuySell/ViewProducts';
import Register from './Register';

const AppRouter = ()=>(
    <Switch>
        <Route exact path="/" component={AdminDash}></Route>
        <Route exact path="/career" component={Carrer}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/aboutus" component={AboutUs}></Route>
        <Route exact path="/rentalservices" component={RentalServices}></Route>
        <Route exact path="/login" component={Login}></Route>  
        <Route exact path="/dash" component={DashBoard}></Route>  
        <Route exact path="/adm/" component={AdminDash}></Route>
        <Route exact path="/adm/admlogin/" component={AdminLogin}></Route>
        <Route exact path="/filter" component={FilterCompany}></Route>
        <Route exact path="/reset" component={ResetPassword}></Route>
        <Route exact path="/addproduct" component={AddProduct}></Route>
        <Route exact path="/viewallproduct" component={ViewAllProduct}></Route>
        <Route exact path="/admbuysell" component={BuySell}></Route>
        <Route exact path="/myproducts" component={ViewProducts}></Route>
        <Route exact path="/register" component={Register}></Route>



    </Switch>
) 
export default AppRouter;

// How to use buy and sell platform

// admin
// http://ec2-34-245-168-207.eu-west-1.compute.amazonaws.com:3000/admbuysell

// Seller
// in dashboard
// http://ec2-34-245-168-207.eu-west-1.compute.amazonaws.com:3000/dash
// sell tab 
// add product information 

// Buyer
// http://ec2-34-245-168-207.eu-west-1.compute.amazonaws.com:3000/viewallproduct 

// Seller 
// track the product details
// http://ec2-34-245-168-207.eu-west-1.compute.amazonaws.com:3000/myproducts 


// features not working 
// delete product
// add image  


// prerequists 
// login admin
// login client 
// different tabs


