import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { link, route ,getStorage} from '../urls';
import Spinner from 'react-bootstrap/Spinner'

class AddCompany extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userdata: [],
            show: false,
            view: false,
            nodata: true,
            adebtn:true,
            cname:'',
            ct:'',
            email:'',
            cp:'',
            cn:'',
            add:'',
            isrby:''
        };
        this.submitBtn = this.submitBtn.bind(this);

    }


  

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });

    }
    componentWillMount() {

        if (getStorage('aid')) {
            const obj = (getStorage('aid'))
            this.state.data = obj;
            this.state.isrby=obj.companyId;
            console.log(obj)
        }
        else {
            route("/admlogin");
            
        }
    }

    submitBtn() {
alert("adding company")
        this.setState({
            adebtn:false
        })
        console.log(this.state)
        const sendData =
        {
            name: this.state.cname,
            city: this.state.ct,
            address: this.state.add,
            email: this.state.email,
            contactNumber: this.state.cn,
            contactPerson: this.state.cp,
            insertedBy: this.state.isrby,
            companyStatus:1
          }
        console.log(sendData);
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.post(`${link}/company/save`, sendData)
            .then((res) => {
                console.log(res);
                 alert("Company Added")
                window.location.reload(); 
                //route("/adm")
            }).catch(e=>alert(e+"try Again"))
        
    
    }
    render() {
        return (
            <div>
      <Row>
            <button  id="adebtn" className="btn btn-primary" onClick={ this.submitBtn } >
              SEND
            </button>
            </Row>
            <Row>
                <Col>
                    <label>Company Name*</label>
                    <input name="cname"  onChange={ (event) => this.handleUserInput(event) } type="text"/>

                   
                </Col>
                <Col>
                    <label>City*</label>
                    <input name="ct" onChange={ (event) => this.handleUserInput(event) } type="text"/>                   
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Email*</label>
                    <input name="email" onChange={ (event) => this.handleUserInput(event) } type="text  "/>

                   
                </Col>
                <Col>
                    <label>Contact Person*</label>
                    <input name="cp"  onChange={ (event) => this.handleUserInput(event) } type="text"/>                   
                </Col>
                <Col>
                    <label>Contact Number*</label>
                    <input name="cn" onChange={ (event) => this.handleUserInput(event) } type="text"/>                   
                </Col>
            </Row>
            <Row>
                <Col>
                <label>Address*</label>
                    <textarea name="add" onChange={ (event) => this.handleUserInput(event) } type="text"/>  
                </Col>
            </Row>
            


            




        </div >
        );
    }
}

export default AddCompany;