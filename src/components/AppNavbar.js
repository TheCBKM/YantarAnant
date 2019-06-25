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
    DropdownItem
} from 'reactstrap';

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
                <Navbar className="navbarcss" light expand="md">
                    <NavbarBrand href="/"><img alt="logo" style={ { height: '200px', width: '200px' } } src={ logo }></img></NavbarBrand>
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Services</NavLink>
              </NavItem> */}
                            <NavItem className='nav-item'>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Services
                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                       < NavItem>
                                <NavLink href="/#/rentalservices">Rental</NavLink>
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
                            <NavItem>
                                <NavLink href="/aboutus">About Us</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/career">Career</NavLink>
                            </NavItem>


                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>


                            <NavItem>
                                <NavLink href="/#/login">Login/Signup</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default AppNavbar;