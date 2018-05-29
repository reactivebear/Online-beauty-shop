import React, { Component } from 'react'
import style from './style.css' 

class NextArrow extends Component {
    
    render() {
        return (
            <div className={`${style.nextArrow}  ${style.wrap}`} onClick={this.props.onClick}>
                <img style={{width: 30}} src="/assets/icons/icons8-chevron-right-48.png" alt="" />
            </div>
        );
    }
}

export default NextArrow