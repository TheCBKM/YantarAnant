import AnimatedNumber from 'react-animated-number';
import React, { Component } from 'react';
class NumberCount extends Component {
 
     render() {
        return (
            <div>
                  <AnimatedNumber component="text" value={this.props.value}
            style={{
                transition: '0.8s ease-out',
                
                transitionProperty:
                    'background-color, color, opacity'
            }}
            // frameStyle={perc => (
            //     perc === 100 ? {} : {backgroundColor: ''}
            // )}
            stepPrecision={0}
            duration={3000}
            //  formatValue={n => prettyBytes(n)}
            />
            </div>
        );
    }
    }

export default NumberCount;