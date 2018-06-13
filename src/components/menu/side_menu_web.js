import React, { Component } from 'react'
import { connect } from 'react-redux'
import { history } from 'store'
import { LIST_MENU } from 'config'
import Avatar from 'components/images/avatar'

class SideMenuWeb extends Component {
    state = {
        display: 'block'
    }

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
        const { first_name, last_name, image_url } = this.props.user.data
        return (
        	<div className="bg-white rounded pb-4 border wrap-menu-web d-none d-sm-block">
        		<div className="row p-4">
        			<div className="col-8 offset-2">
        				<div className="form-group">
                            <Avatar image={image_url} defaultImg="/assets/images/default-avatar.png" edit={false} />
            			</div>
	            	</div>
	            </div>
	            <h2 className="text-center mb-5"><strong>{`${first_name} ${last_name}`}</strong></h2>
                { LIST_MENU.map((item, i) => this.printList(item, i)) }
			</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        user: {
            data: {
                first_name: state.user.data.first_name,
                last_name: state.user.data.last_name,
                image_url: state.user.data.image_url,
            }
        }
    })

export default connect(
    mapStateToProps
)(SideMenuWeb)