import React, { Component } from 'react';
import { link, getStorage, route } from "../urls";
import axios from 'axios';
import { Row, Col } from 'reactstrap';

import ProductCard from './ProductCard';
class ViewAllProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            prdata: []

        }
        this.showIntreset = this.showIntreset.bind(this);

    }
    componentWillMount() {

        if (getStorage('uid')) {
            const obj = (getStorage('uid'))
            this.state.data = obj;
            console.log(obj)
        }
        else {

            route("/login")
            //window.location.reload(); 
        }
    }


    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;

        axios.get(`${link}/product/listall/1`).then((res) => {
            console.log(res.data);
            this.setState({
                prdata: res.data,
                nodata: false
            })

            console.log(this.state.prdata)
        })
    }

    showIntreset(id) {
        const sendData = {
            _id: id,
            company: this.state.data.companyId
        }
        console.log(sendData)
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;

        axios.post(`${link}/product/intreset`, sendData).then((res) => {
            console.log(res.data);
            alert("intreset Shown")
            window.location.reload()
        })
    }

    render() {
        const data = this.state.prdata
        console.log(data)
        return (
            <div>
                <Row>
                    {
                        data.map((d, i) =>
                            <Col md={ 6 }>
                                <ProductCard
                                    name={ d.name } />
                                { d.intresets.includes(this.state.data.companyId) ?
                                    <button class="btn btn-outline-success my-2 my-sm-0"  type="submit">Already Intreseted</button>

                                    :
                                    <button class="btn btn-outline-danger my-2 my-sm-0" onClick={ () => { this.showIntreset(d._id) } } type="submit">Show Intreset</button>
                                }

                            </Col>
                        )
                    }
                </Row>
            </div>
        );
    }
}

export default ViewAllProduct;