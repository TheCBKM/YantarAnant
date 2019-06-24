import React, { Component } from 'react';
import {Row,Col} from 'reactstrap';
import Collapse from 'react-bootstrap/Collapse'



class Question extends Component {
  constructor(props, context) {
  super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <Row>
         <Col className="Question">
        <lable
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          style={{align:"center",}}
        >
         
            <div style={{textAlign: "center", paddingTop:"3%",fontFamily: " Helvetica", fontSize: 'calc(.5em + 1vw)' }}>{this.props.question}</div>
            
        </lable>
        <hr style={{backgroundColor:" rgb(35, 176, 201)",width:"50%",align:"right !important"}}/ >
        <Collapse in={this.state.open}>
          <div id="example-collapse-text"  style={{textAlign: "center" ,paddingLeft:"5%",paddingRight:"5%",fontSize: 'calc(.5em + .8vw)',boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)"}}>
          {this.props.answer}
          </div>
        </Collapse>
        </Col>
      </Row>
        );
      }
    }

export default Question;