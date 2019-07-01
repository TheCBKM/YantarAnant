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
                <Row >
                    <Col   md="0"    style={{align:"center"}}   >
                    </Col>
                    <Col md="12">                                                                                                                                              
                    <Navbar className="navbarcss" light expand="md">
                    <NavbarBrand href="/">
                    <img alt="logo" style={ { height: '200px', width: '200px' } } src={ logo }></img>

                    </NavbarBrand>
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="" navbar >
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
                           
                            {/* <NavItem>
                            <div id="google_translate_element"></div>
                            </NavItem> */}

                            <NavItem className='nav-item'>
                                <NavLink href="/login">Login/Signup</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
                    </Col>
                </Row>
                
            </div>
        );
    }
}
export default AppNavbar;