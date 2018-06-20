import React, { Component } from 'react'
import './collapsed_menu.css'

class CollapsedMenu extends Component {
    state = {
        active: true
    }

    toggleBody = active => e => {
        this.setState({active})
    }

    render() {
        const activeClass = this.state.active ? ' active' : ''
        return (
            <div className="mb-2">
                <div className="d-flex align-items-start">
                    <div className="color-grey" style={{paddingTop: 2}}>
                    {
                        this.state.active
                        ?   <i onClick={this.toggleBody(false)} className="fas fa-minus-circle pointer"></i>
                        :   <i onClick={this.toggleBody(true)} className="fas fa-plus-circle pointer"></i>
                    }
                    </div>
                    <div className="px-2">
                        <span className="fs-22" style={{lineHeight: 1}}>{this.props.title}</span>
                    </div>
                </div>
                <div className={`wrap-collapsed-body${activeClass}`}>
                    {this.props.body}
                </div>
            </div>   
        );
    }
}

export default CollapsedMenu