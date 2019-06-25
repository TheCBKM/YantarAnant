import React, { Component } from 'react';
import axios from 'axios';
import { link, route, getStorage } from '../urls';
import Button from 'react-bootstrap/Button';
import Spinners from '../Spinners';
import AddSubCategory from './AddSubCategory';
import EditSubCategory from './EditSubCategory';

class SubCategory extends Component {
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
           
            route("/admlogin")
        }

    }
    delet(id) {
       alert(id)
        this.setState({nodata:true});
        const sendData = { data: { _id: id } }
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.delete(`${link}/subcategory/delete`, sendData).then((res) => {
            console.log(res);
            // alert("Equipment Deleted")
            window.location.reload()
           // route("/adm")
        })
        
    }
    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.get(`${link}/subcategory/list`).then((res) => {
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
                        <div style={ { paddingLeft: "20%", paddingRight: "20%" } }><AddSubCategory /> </div>
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
                                            <th> Radius</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead> <tbody>
                                        { details.map(d =>
                                            <tr>
                                                <td>{ d.name }</td>
                                                <td>{ d.radius }</td>
                                                
                                                <td><div style={ { color: "red" } } onClick={ () => this.delet((d.id)) }>
                                                    <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
                                                </div>
                                                <div >
                                                    <EditSubCategory
                                                    ename={d.name }
                                                    radius={d.radius}
                                                    id={d.id}
                                                    />
                                                </div>
                                                </td>
                                            </tr>)
                                        }

                                    </tbody></table>
                        }
                    </div> }
            </div>
        );
    }
}

export default SubCategory;