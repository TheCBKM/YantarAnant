import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { link, route ,getStorage} from '../urls';
import Spinners from '../Spinners';
import Spinner from 'react-bootstrap/Spinner'
import EditSubCategory from './EditSubCategory'
 
class AddSubCategory extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            name:'',
            adebtn:true,
            category:'',
            catarr:[]
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
    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;

        axios.get(`${link}/category/list`).then((res) => {
            console.log(res.data);
            this.setState({
                catarr: res.data,
                nodata: false

            })


        })
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
            category:this.state.category
            
            
          }
        console.log(sendData);
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.post(`${link}/subcategory/save`, sendData)
            .then((res) => {
                console.log(res);
                 alert("sub Category Added")
                 window.location.reload(); 
            })
        
    
    }

    render() {
        return (
            <div>
                <EditSubCategory/>
               <Row>
                <Col>
                    <label>Category Name*</label>
                    <select name="category" onChange={ (event) => this.handleUserInput(event) }>
                        <option value={ -1} >Choose........</option>
                            { this.state.catarr.map((eqn, i) =>
                                <option value={ eqn._id }>{ eqn.name }</option>
                            ) }
                        </select>
                   
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <label>Sub Category Name*</label>
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

export default AddSubCategory;