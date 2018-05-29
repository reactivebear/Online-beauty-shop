import React, { Component } from 'react'
import { history } from 'store'
import { LIST_MENU } from 'config'

class HeaderMenu extends Component {
	printList = (item, i) => {
        return  <div key={i} className="row align-items-center py-2" onClick={this.goToUrl(item.url)}>
        			<div className="col-2">
                    	<img src={`/assets/icons/${item.icon}.png`} alt="" className="img-fluid" />
                    </div>
                    <div className="col-10 pl-4">
                    	<span className="pointer">{item.title}</span>
                	</div>
                </div>
    }

    goToUrl = url => e => {
    	this.props[0]()
    	history.push(`/${url}`)
    }

	render() {
		return (
			<div>
				{ LIST_MENU.map((item, i) => this.printList(item, i)) }
			</div>
		)
	}
}

export default HeaderMenu