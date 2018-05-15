import React, { Component } from 'react'

class Tag extends Component {

    render() {
        return (
            <span className="tag bg-grey text-white">{this.props.title}</span>
        );
    }
}

export default Tag