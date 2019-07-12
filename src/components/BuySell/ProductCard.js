import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import { link } from '../urls'

class ProductCard extends Component {
    render() {
        const data = this.props.data
        return (
            <div>

                <Card >
                    <CardBody>
                        <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                            <img style={ { width: "50%" } } src={ `${link}/static/products-img/${data.images}` } alt="img"></img>
                            <br />
                            { data.name }
                        </CardTitle>
                        <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                            { data.location }

                        </CardSubtitle>
                        <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                            ₹{ data.expectedPrice }
                        </CardSubtitle>
                    </CardBody>
                </Card>

            </div>
        );
    }
}

export default ProductCard;