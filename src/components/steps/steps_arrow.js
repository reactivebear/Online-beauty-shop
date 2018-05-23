import React, { Component } from 'react'
import style from './steps_arrow.css'

class StepsArrow extends Component {
    printSteps = (item, i) => {
        let className = i + 1 === this.props.active ? 'nav-item active' : 'nav-item'
        return  <li key={i} className={className} onClick={this.props.onClick(i+1)}>
                    <a href="javascript:;" className="nav-link">
                        {
                             i + 1 >= this.props.active
                             ?  <span className="step-number">{i+1}</span>
                             :  <span className="step-number check"><i className="fas fa-check"></i></span>
                        }
                        <span className="step-description">{item.title}</span>
                    </a>
                </li>
    }
    render() {
        return (
            <div className={`sw-main sw-theme-arrows ${this.props.className}`}>
                <ul className="nav nav-tabs step-anchor rounded">
                    { this.props.steps.map((item, i) => this.printSteps(item, i)) }
                   
                </ul>
            </div>
        );
    }
}

export default StepsArrow