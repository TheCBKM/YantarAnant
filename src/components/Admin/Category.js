import React, { Component } from 'react';
import axios from 'axios';
import { link, location, getStorage } from '../urls';
import Button from 'react-bootstrap/Button';
import Spinners from '../Spinners';
import AddCategory from './AddCategory';

class Category extends Component {
    constructor(props, context) {
        super(props, context);


        this.delet = this.delet.bind(this);

        this.state = {
            categorydata: [],
            view: false
        };
    }
    componentWillMount() {

        if (getStorage('aid')) {
            const obj = getStorage('aid')
            this.state.data = obj;
        }
        else {
            window.location.pathname = `/admlogin`
        }

    }
    delet(id) {
       
        this.setState({nodata:true});
        const sendData = { data: { _id: id } }
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.delete(`${link}/category/delete`, sendData).then((res) => {
            console.log(res);
            // alert("Equipment Deleted")
            window.location.pathname=`/adm`;
        })
        
    }
    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.get(`${link}/category/list`).then((res) => {
            console.log(res.data);
            this.setState({
                categorydata: res.data,
                nodata: false
            })
          // console.log(this.state.categorydata)

        })
    }

    handleShow = () => {
        this.setState({ view: true });
    }

    handleClose = () => {
        this.setState({ view: false });
    }
    render() {
        const details = this.state.categorydata

        return (
            <div style={{paddingTop:"2%"}}>
                { this.state.view ?
                    <div >

                        <Button variant="primary" onClick={ this.handleClose }>
                            View Category
                         </Button>
                        <div style={ { paddingLeft: "20%", paddingRight: "20%" } }><AddCategory /> </div>
                    </div>
                    : <div>
                        <Button variant="primary" onClick={ this.handleShow }>
                            + Add Category
                         </Button>
                        { (details.length == 0) ? <h3>No data yet</h3> :
                                <table class=" dash-table">
                                    <thead>
                                        <tr>
                                            <th> Name</th>
                                            
                                            <th>Action</th>
                                        </tr>
                                    </thead> <tbody>
                                        { details.map(d =>
                                            <tr>
                                                <td>{ d.name }</td>
                                                
                                                <td><div style={ { color: "red" } } onClick={ () => this.delet((d._id)) }>
                                                    <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
                                                </div></td>
                                            </tr>)
                                        }

                                    </tbody></table>
                        }
                    </div> }
            </div>
        );
    }
}

export default Category;