import React, { Component } from 'react'

class BtnGroup extends Component {
    printButtons = (item , i) => {
        let unactiveClass = item.active ? '' : 'unactive'
        return  <button
                    key={i} 
                    type="button" 
                    onClick={item.onClick}
                    className={"btn btn-primary w-50 " + unactiveClass}>
                    {item.title}
                </button>
    }
    render() {
        return (
            <div className="btn-group w-100" role="group">
                { this.props.buttons.map((item, i) => this.printButtons(item, i)) }
            </div> 
        );
    }
}

export default BtnGroup