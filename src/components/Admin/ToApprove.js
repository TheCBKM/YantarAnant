import React, { Component } from 'react';
import { link, route, getStorage } from '../urls';
import axios from 'axios';
import { Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';

class ToApprove extends Component {
    constructor(props, context) {
        super(props, context);
        this.approve = this.approve.bind(this);
        this.disapprove = this.disapprove.bind(this);
        this.delete = this.delete.bind(this)
        this.whyDisapprove = this.whyDisapprove.bind(this);

        this.state = {
            productData: [],
            adminDesc: '',
            modal: false,
            id:''
        };
    }
    delete(id) {
        alert(id)
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        const sendData = {
            data:{_id: id,}
        }
        axios.delete(`${link}/product/delete`, sendData).then((res) => {
            console.log(res.data);
            alert("Product deleted")
            window.location.reload()
        })
    }
    approve(id) {
        alert(id)
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        const sendData = {
            _id: id,
            status: 1
        }
        axios.post(`${link}/product/update`, sendData).then((res) => {
            console.log(res.data);
            alert("Product Approved")
            window.location.reload()
        })
    }
    whyDisapprove(id) {
        this.setState({
            modal: true,
            id:id
        })
    }
    disapprove() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        const sendData = {
            _id: this.state.id,
            status: -1,
            adminDesc: this.state.adminDesc
        }
        console.log(sendData)
        axios.post(`${link}/product/update`, sendData).then((res) => {
            console.log(res.data);
            alert("Product dis-Approved")
            window.location.reload()
        })
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
    componentDidMount() {
        axios.get(`${link}/product/listall/0`).then((res) => {
            console.log(res.data);
            this.setState({
                productData: res.data,
                nodata: false
            })
            console.log(this.state.productData)

        })
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    render() {
        const details = this.state.productData
        return (
            <div style={ { paddingTop: "2%" } }>
                < table class=" dash-table">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Company Name</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead> <tbody>
                        { details.map(d =>
                            <tr>
                                <td>{ d.name }</td>
                                <td>{ d.company.name }</td>
                                <td>{ d.company.contactNumber }</td>
                                <td>
                                    <button onClick={ () => this.approve((d._id)) } type="button" data-toggle="tooltip" title="Approve" class="btn btn-success custom-btn"><i class="fa fa-check" aria-hidden="true"></i></button>
                                    <button onClick={ () => this.whyDisapprove(d._id) } type="button" data-toggle="tooltip" title="Diss-Approve" class="btn btn-danger custom-btn"><i class="fa fa-ban" aria-hidden="true"></i></button>
                                    <button onClick={ () => this.delete((d._id)) } type="button" data-toggle="tooltip" title="Approve" class="btn btn-danger custom-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                < Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>
                    <ModalHeader toggle={ this.toggle }>
                        <div>
                        Why disapprove?
                            </div>
                    </ModalHeader>
                    <ModalBody>
                        <label>Description</label>
                        <input type="text" className="form-control"
                            name="adminDesc" onChange={ (event) => this.handleUserInput(event) } />
                        <button id="focus" type="submit" className="btn btn-primary" onClick={()=> this.disapprove() } >
                            disapprove
                        </button>
                    </ModalBody>
                    <ModalFooter>

                            <Button color="secondary" onClick={ this.toggle }>Close</Button>
                        </ModalFooter>

                </Modal>
            </div >
        );
    }
}

export default ToApprove;