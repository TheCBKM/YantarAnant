import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

class ProductCard extends Component {
    render() {
        const data= this.props.data
        return (
            <div>

                <Card >
                    <CardBody>
                        <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                        { data.name }
                        </CardTitle>
                        <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                            {data.location}
                        </CardSubtitle>
                        <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                        ₹{data.expectedPrice}
                        </CardSubtitle>
                    </CardBody>
                </Card>

            </div>
        );
    }
}

export default ProductCard;