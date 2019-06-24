import React, { Component } from 'react';
import { Button, Row, Col ,Alert,Badge} from 'reactstrap';
import Collapse from 'react-bootstrap/Collapse';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';




class GetInTouch extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value; 
        this.setState({ [name]: value });
    }
    render() {
        const { open } = this.state;
        return (
            <Row>
                <Col className="Question">
                   
                    <lable
                        onClick={ () => this.setState({ open: !open }) }
                        aria-controls="example-collapse-text"
                        aria-expanded={ open }
                        style={ { align: "center", } }
                    >
                           
                        <div style={ { textAlign: "center", paddingTop: "3%", fontFamily: " Helvetica", fontSize: 'calc(.5em + 1vw)' } }> 
                         <Alert color="primary">
                        Get In Touch<Badge color="secondary">Click Here</Badge>
      </Alert></div>

                    </lable>
                    
                    <hr style={ { backgroundColor: " rgb(35, 176, 201)", width: "50%", align: "right !important" } } />
                    <Collapse in={ this.state.open }>
                        
                        <div id="example-collapse-text" style={ { textAlign: "center", paddingLeft: "5%", paddingRight: "5%", fontSize: 'calc(.5em + .8vw)' } }>
                        <h4>Enter you Details</h4>
                            <Row>
                            <Col>
                                <label >Name</label>
                                 <input type="text"  name="name" onChange={ (event) => this.handleUserInput(event) } />
                            </Col>
                            <Col>
                                <label >Phone</label>
                                 <input type="number"  name="num" onChange={ (event) => this.handleUserInput(event) } />
                            </Col>
                            </Row>
                            <Row>
                           
                            <Col>
                                <label>E-mail</label>
                                 <input type="text"  name="email" onChange={ (event) => this.handleUserInput(event) } />
                            </Col>
                            </Row>
                            <Row>
                           
                           <Col>
                               <label>Address</label>
                                <input type="text"  name="add" onChange={ (event) => this.handleUserInput(event) } />
                           </Col>
                           <Col>
                               <label>Pin Code</label>
                                <input type="text"  name="pin" onChange={ (event) => this.handleUserInput(event) } />
                           </Col>
                           </Row>
                           <Row>
                           
                           <Col>
                               <label>Description</label>
                                <input type="text"  name="desc" onChange={ (event) => this.handleUserInput(event) } />
                           </Col>
                           </Row>   
                        </div>
                    </Collapse>
                </Col>
            </Row>
        );
    }
}

export default GetInTouch;