import React, { Component } from 'react'
import './dropdown.css'

class DropDown extends Component {
    state = {
        active: this.props.list[0],
        open: false
    }

    toggleMenu = e => {
        this.setState({open: !this.state.open})
        if (this.state.open) {
            document.body.removeEventListener('click', this.closeMenu)
        } else {
            document.body.addEventListener('click', this.closeMenu)
            
        }
    }

    closeMenu = e => {
        if (! e.target.closest('#dropdown')) {
            this.setState({open: false})
            document.body.removeEventListener('click', this.closeMenu)
        }
    }

    setItem = item => e => {
        this.setState({active: item, open: false})
        document.body.removeEventListener('click', this.closeMenu)
    }

    printList = (item, i) => {
        return <div className="px-4 py-3 drop-item color-grey pointer" onClick={this.setItem(item)} key={i}>{item}</div>
    }

    render() {
        const activeClass = this.state.open ? ' active' : ''
        return (
            <div id="dropdown">
                <div className="position-relative">
                    <div className="d-inline pointer" onClick={this.toggleMenu}>
                       <span className="color-grey">{this.state.active}</span>
                       &nbsp;
                       <i className="fas fa-chevron-down color-grey px-2"></i>
                   </div>
                   <div className={`position-absolute bg-white border-green wrap-drop-item rounded py-2${activeClass}`}>
                        {this.props.list.map((item, i) => this.printList(item, i))}
                    </div>
               </div>
            </div>
        );
    }
}

export default DropDown