import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { link, route ,getStorage} from '../urls';
import Spinner from 'react-bootstrap/Spinner'

class AddCategory extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            name:'',
            adebtn:true
        };
        this.submitBtn = this.submitBtn.bind(this);
       
    }

    componentWillMount() {

        if (getStorage('aid')) {
            const obj =getStorage('aid')
            this.state.data = obj;
        }
        else {
            route("/admlogin");
        }



    }


    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });

    }
    submitBtn() {

        this.setState({
            adebtn:false
        })
        console.log(this.state)
        const sendData =
        {
            name: this.state.name,
            
          }
        console.log(sendData);
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.post(`${link}/category/save`, sendData)
            .then((res) => {
                console.log(res);
                 alert("Category Added")
                 window.location.reload(); 
               // route("/adm");
            })
        
    
    }

    render() {
        return (
            <div>
               <Row>
                <Col>
                    <label>Category Name*</label>
                    <input name="name"  onChange={ (event) => this.handleUserInput(event) } type="text"/>

                   
                </Col>
                
            </Row>
            <button type="submit" id="adebtn" className="btn btn-primary" onClick={ this.submitBtn } >
                { this.state.adebtn ? <div>Submit</div> : <div><Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /> Loading</div> }
            </button>
            </div>
        );
    }
}

export default AddCategory;