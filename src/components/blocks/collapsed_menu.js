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
            <div>
                <div className="d-flex align-items-center">
                    <div className="color-grey pt-1">
                    {
                        this.state.active
                        ?   <i onClick={this.toggleBody(false)} className="fas fa-minus-circle pointer"></i>
                        :   <i onClick={this.toggleBody(true)} className="fas fa-plus-circle pointer"></i>
                    }
                    </div>
                    <div className="px-2">
                        <span className="fs-22">{this.props.title}</span>
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