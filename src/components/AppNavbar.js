import React from 'react';
import { logo } from '../Appimages'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Col
} from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import { route } from './urls';

class AppNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                {/* <Row >
                    <Col   md="0"    style={{align:"center"}}   >
                    </Col>
                    <Col md="12">                                                                                                                                              
                    <Navbar className="navbarcss" light expand="md">
                    <NavbarBrand href="/">
                    <img alt="logo" style={ { height: '200px', width: '200px' } } src={ logo }></img>

                    </NavbarBrand>
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="ml-auto mr-auto" navbar >
                            <NavItem className='nav-item'>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            
                            <NavItem className='nav-item'>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Services
                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                       < NavItem>
                                <NavLink href="/rentalservices">Rental</NavLink>
                            </NavItem>
                  </DropdownItem>
                                        <DropdownItem>
                                            Used
                  </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Operator
                  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                            <NavItem className='nav-item'>
                                <NavLink href="/">About Us</NavLink>
                            </NavItem>

                            <NavItem className='nav-item'>
                                <NavLink href="/">Career</NavLink>
                            </NavItem>


                            <NavItem className='nav-item'>
                                <NavLink href="/">Contact</NavLink>
                            </NavItem>
                           </Nav>
                    

                            <div className='nav-item'>
                                <NavLink href="/login">Login/Signup</NavLink>
                            </div>

                        
                    </Collapse>
                </Navbar>
                    </Col>
                </Row> */}
                <nav class=" navbarcss navbar navbar-expand-lg navbar-light bg-light">
                <img alt="logo" style={ { height: '200px', width: '200px' } } src={ logo }></img>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                            <button class="btn btn-outline-danger my-2 my-sm-0" onClick={()=>{route("/")}} type="submit">Home</button>
                            </li>
                            <li class="nav-item">
                            <button class="btn btn-outline-danger my-2 my-sm-0" onClick={()=>{route("/login")}} type="submit">About</button>
                            </li>
                            <li class="nav-item dropdown">
                                <button class=" btn btn-outline-danger nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services

        </button>
                                <div class=" dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/rentalservices">Rental</a>
                                    <a class="dropdown-item" href="#">Buy & Sell</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Operator</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-outline-danger my-2 my-sm-0" onClick={()=>{route("/login")}} type="submit">Career</button>

                            </li>
                        </ul>
                        
                        <div class="nav-item">
                        <button class="btn btn-warning my-2 my-sm-0" onClick={()=>{route("/login")}} type="submit">Login/SignUp</button>
                            </div>
                       
                    </div>
                </nav>

            </div>
        );
    }
}
export default AppNavbar;