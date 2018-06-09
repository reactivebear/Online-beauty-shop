import React, { Component } from 'react'

class Price extends Component {

    format = num => num.length > 3 ? `${num.slice(0, 1)}.${num.slice(1)}` : num

    render() {
        const current = this.props.current ? this.props.current.toString().split('.') : '0'
        const old = this.props.old ? this.props.old.toString().split('.') : ''
        
        const cent = current[1] ? current[1].length > 1 ? current[1] : `${current[1]}0` : '00'
        const centOld = old[1] ? old[1].length > 1 ? old[1] : `${old[1]}0` : '00'

        return (
            <div className={this.props.className} style={{marginBottom: -7}}>
                {
                    this.props.old
                    ?   <span><span className="price-old fs-18">R$ {this.format(old[0])}<sup><small>,{centOld}</small></sup></span>&nbsp;&nbsp;&nbsp;</span>
                    :   ''
                }
                <span className="fs-22">R$ {this.format(current[0])}<sup><small>,{cent}</small></sup></span>
            </div>
        );
    }
}

export default Price