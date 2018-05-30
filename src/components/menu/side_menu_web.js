import React, { Component } from 'react'
import { history } from 'store'
import { LIST_MENU } from 'config'

class SideMenuWeb extends Component {
    printList = (item, i) => {
        const [, first] = history.location.pathname.split('/')
        let className = 'pl-3 py-3 d-flex align-items-center pointer menu-web-item color-grey'
        if (item.url === first) {
            className += ' active'
        }
        return  <div key={i} className={className} onClick={e => history.push(`/${item.url}`)}>
                    <img src={`/assets/icons/${item.icon}.png`} alt="" className="img-fluid w-15 h-100 pr-2" />
                    <span className="w-85 fs-18 pl-4">{item.title}</span>
                </div>
    }

    render() {
        return (
        	<div className="bg-white rounded pb-4 border wrap-menu-web d-none d-sm-block">
        		<div className="row p-4">
        			<div className="col-8 offset-2">
        				<div className="form-group">
	            			<img src="/assets/images/default-avatar.png" className="img-fluid" alt="" />
            			</div>
	            	</div>
	            </div>
	            <h2 className="text-center mb-5"><strong>Igor dos Anjos</strong></h2>
                { LIST_MENU.map((item, i) => this.printList(item, i)) }
			</div>
        );
    }
}

export default SideMenuWeb