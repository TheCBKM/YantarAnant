import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

class ProductCard extends Component {
    render() {
        return (
            <div>

                <Card >
                    <CardBody>
                        <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                        </CardTitle>
                        <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                            { this.props.name }
                        </CardSubtitle>
                    </CardBody>
                </Card>

            </div>
        );
    }
}

export default ProductCard;