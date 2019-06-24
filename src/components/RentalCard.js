import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardImg } from 'reactstrap'
import NumberCount from './NumberCount';

class RentalCard extends Component {
    render() {
      
        return (
            <div>
            
                <Card style={{border: "1px" ,  boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2)"}}>
                    <CardBody>
                        <CardImg src={ this.props.img } style={{maxHeight:"50%",maxWidth:"50%"}} />
                        <CardTitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em' } }>
                        <NumberCount value={this.props.value}/> 
                        </CardTitle>
                        <CardSubtitle style={ { fontSize: 'calc(1em + 1vw)', paddingTop: '1em'  } }>
                            { this.props.name }
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default RentalCard;