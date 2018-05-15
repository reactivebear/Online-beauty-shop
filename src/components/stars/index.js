import React, { Component } from 'react'

class Stars extends Component {
    getArray = () => Array.apply(null, Array(5))

    render() {
        return (
            this.getArray().map((item, i) => (<i key={i} style={{color: this.props.active > i ? '#609D6D' : 'inherit'}} className="far fa-star"></i>))
        );
    }
}

export default Stars