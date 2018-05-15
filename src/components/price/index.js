import React, { Component } from 'react'

class Price extends Component {
    render() {
        const current = this.props.current.toString().split('.')
        const old = this.props.old.toString().split('.')
        const cent = current[1].length > 1 ? current[1] : `${current[1]}0`
        const centOld = old[1].length > 1 ? old[1] : `${old[1]}0`
        return (
            <div>
                {
                    this.props.old
                    ?   <span><span className="price-old">R$ {old[0]}<sup><small>,{centOld}</small></sup></span>&nbsp;</span>
                    :   ''
                }
                <span className="fs-18">R$ {current[0]}<sup><small>,{cent}</small></sup></span>
            </div>
        );
    }
}

export default Price