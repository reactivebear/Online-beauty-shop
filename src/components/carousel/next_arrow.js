import React, { Component } from 'react'

class NextArrow extends Component {
    
    render() {
        return (
            <div onClick={this.props.onClick}>
                <i className="fas fa-chevron-right fa-3x"></i>
            </div>
        );
    }
}

export default NextArrow