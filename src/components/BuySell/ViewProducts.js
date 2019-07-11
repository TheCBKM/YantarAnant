import React, { Component } from 'react';
import { link, route, getStorage } from '../urls';
import axios from 'axios';
import { Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';

class ViewProducts extends Component {
    constructor(props, context) {
        super(props, context);
        this.viewDetails = this.viewDetails.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            productData: [],
            data: {},
            modal: false,
            modaldata: null,
        };
    }
    viewDetails(data) {
        if (data.length > 0) {
            const sendData = {
                data: data,
                status: 1
            }

            this.setState({
                modal: true,
                modaldata: sendData
            })
        }
        else
            alert("no intersets yet")

    }
    viewDescription(data) {

        const sendData = {
            data: data,
            status: 2
        }

        this.setState({
            modal: true,
            modaldata: sendData
        })

    }
    componentWillMount() {

        if (getStorage('uid')) {
            const obj = getStorage('uid')
            this.state.data = obj;
            console.log(this.state.data)

        }
        else {
            route("/login")
        }
    }
    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;

        axios.get(`${link}/product/list`).then((res) => {
            console.log(res.data);
            this.setState({
                productData: res.data,
                nodata: false
            })
            console.log(this.state.productData)

        })
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
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
                            <th>status</th>
                        </tr>
                    </thead> <tbody>
                        { details.map(d =>
                            <tr>
                                <td>{ d.name }</td>
                                <td>{ d.company.name }</td>
                                <td>{ d.company.contactNumber }</td>
                                <td>
                                    { d.status == 0 ?
                                        <button onClick={ () => this.viewDetails((d.intresets)) } type="button" data-toggle="tooltip" title="waiting" class="btn btn-primary custom-btn">waiting</button>
                                        : d.status == 1 ?
                                            <button onClick={ () => this.viewDetails((d.intresets)) } type="button" data-toggle="tooltip" title="approved" class="btn btn-success custom-btn">approved</button>
                                            :
                                            <button onClick={ () => this.viewDescription((d.adminDesc)) } type="button" data-toggle="tooltip" title="not approved" class="btn btn-danger custom-btn">not approved</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                < Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>
                    <ModalHeader toggle={ this.toggle }>
                        <div>
                            Details
                            </div>
                    </ModalHeader>
                    <ModalBody>
                        {this.state.modaldata? this.state.modaldata.status == 2 ?
                         this.state.modaldata.data :"":""
                                }
                        {
                              this.state.modaldata ?this.state.modaldata.status == 1 ? this.state.modaldata.data.map(d =>

                                ` ${d.contactPerson} ----- ${d.contactNumber} ------ ${d.city}$`
                            ):"":""
                        }
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={ this.toggle }>Close</Button>
                    </ModalFooter>
                </Modal>


            </div >
        );
    }
}

export default ViewProducts;