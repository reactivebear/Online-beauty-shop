import React, { Component } from 'react'

class PrevArrow extends Component {
    
    render() {
        return (
            <div onClick={this.props.onClick}>
                <i className="fas fa-chevron-left fa-3x"></i>
            </div>
        );
    }
}

export default PrevArrow