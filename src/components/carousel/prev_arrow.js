import React, { Component } from 'react'
import style from './style.css' 

class PrevArrow extends Component {
    
    render() {
        return (
            <div className={`${style.prevArrow} ${style.wrap}`} onClick={this.props.onClick}>
                <img style={{width: 30}} src="/assets/icons/icons8-chevron-left-48.png" />
            </div>
        );
    }
}

export default PrevArrow