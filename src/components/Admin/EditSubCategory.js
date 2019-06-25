import React, { Component } from 'react';
import { link, Route, getStorage, removeStorage, route } from '../urls';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import axios from 'axios';
import { Row } from 'reactstrap';
import Col from 'reactstrap/lib/Col';

class EditSubCategoty extends Component {
    constructor(props,context){
        super(props,context);
    
    this.state = {
        radius: this.props.radius,
        ename: this.props.ename,
        id: this.props.id,
        addd: true,
        radiusd: true,
        data:{}
        
    }
    this.toggle = this.toggle.bind(this);
}

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentWillMount() {
       

        if (getStorage('aid')) {
            const obj = (getStorage('aid'))
            this.state.data = obj;
            console.log(obj)
            const data = this.state.data.user.company;
          
            console.log(data)


        }
        else {
            route('/adm')
        }
    }
    updatedata = () => {
        const sendData={
            name:this.state.ename,
            _id:this.state.id,
            radius:this.state.radius
        }

        console.log(sendData)
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.post(`${link}/subcategory/update`, sendData)
            .then((res) => {
                console.log(res);
                alert("Radius Updated")                
                 window.location.reload()
                //route('/login')
            })
    }
    handleUserInput(e) {
        const name = e.target.name
        const value = e.target.value;
        this.setState({ [name]: value });

    }
    render() {
 
        return (
            <div>
                 <div>
                    <Button color="danger" onClick={ this.toggle }>{ this.props.buttonLabel }Details</Button>
                    <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>
                        <ModalHeader toggle={ this.toggle }>Details</ModalHeader>
                        <ModalBody>
                        <Row>
                    <Col>
                        < button onClick={ (event) => this.setState({
                            addd: false,
                            radiusd: false
                        }) } >Edit</ button>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <lable>Names</lable><br />
                        <input name="name" value={ this.state.ename } onChange={ (event) => this.handleUserInput(event) }  disabled="disabled" />

                    </Col>
                    <Col>
                        <lable>Radius</lable><br />
                        <input name="radius" value={ this.state.radius } onChange={ (event) => this.handleUserInput(event) }  disabled={ (this.state.radiusd) ? "disabled" : "" } />

                    </Col>

                </Row>

                <Row>
                    <Col>
                        <div>
                            < button onClick={ this.updatedata } >Update</ button>

                        </div></Col>
                    <Col>
                        <div>
                            < button onClick={ () => { window.location.reload() } } >Cancle</ button>

                        </div>
                    </Col>
                </Row>
                        </ModalBody>
                        <ModalFooter>

                            <Button color="secondary" onClick={ this.toggle }>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                
            </div >


        );
    }
}

export default EditSubCategoty;