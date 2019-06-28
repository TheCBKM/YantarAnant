import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ExtraDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        const { eqn, cap, tn, cn, cp, cnu, em, ct, pin, doc } = this.props;
        return (
            <div>
                <div>
                    <Button color="danger"  style={ { fontSize: "calc(5px + 1vh)" } } onClick={ this.toggle }>{ this.props.buttonLabel }Details</Button>
                    <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>
                        <ModalHeader  toggle={ this.toggle }>
                            <div>
                                Details
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <table class=" ed-table">
                                <thead>
                                    <tr>
                                        <th>Equipment Name</th>
                                        <th>Capacity</th>
                                        <th>Tenure</th>
                                    </tr>
                                </thead> <tbody>

                                    <tr>
                                        <td>{ eqn }</td>
                                        <td>{ cap }</td>
                                        <td>{ tn }</td>
                                    </tr>

                                </tbody>
                            </table>
                            <br />
                            <table class="  ed-table">
                                <thead>
                                    <tr>
                                        <th>Company Name</th>
                                        <th>Contact Person</th>
                                        <th>Contact Number</th>
                                        <th>E-mail</th>
                                    </tr>
                                </thead> <tbody>

                                    <tr>
                                        <td>{ cn }</td>
                                        <td>{ cp }</td>
                                        <td><a href={ `tel:${cnu}` }>{ cnu }</a></td>
                                        <td>{ em }</td>
                                    </tr>

                                </tbody>
                            </table>
                            <br />
                            <table class="  ed-table">
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Pincode</th>
                                        <th>Date Of Creation</th>
                                    </tr>
                                </thead> <tbody>

                                    <tr>
                                        <td>{ ct }</td>
                                        <td>{ pin }</td>
                                        <td>{ new Date(doc)
                                            .toString()
                                            .split(" ")
                                            .slice(0, 4)
                                            .join(" ") || "NO DATA" }</td>
                                    </tr>

                                </tbody>
                            </table>
                        </ModalBody>
                        <ModalFooter>

                            <Button color="secondary" onClick={ this.toggle }>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>

            </div>
        );
    }
}

export default ExtraDetails;