import React, { Component } from 'react'
import store from 'store'
import { getCategories } from 'actions'
import CardService from 'components/cards/service.js'
import BtnGroup from 'components/buttons/btn_group.js'
import { connect } from 'react-redux'

class Main extends Component {
	constructor(props) {
		super(props)
		console.log(this.props.user.token)
		//store.dispatch(getCategories())
	}

	toggleCat = item => e => {
		console.log(item)
	}

    render() {
    	const catButtons = [{title: 'Produtos', onClick: this.toggleCat('products')}, {title: 'Serviços', onClick: this.toggleCat('services')}]
        return (
        	<div className="bg-main">
        		<div className="container">
        			<div className="text-center">
			            <BtnGroup
			            	buttons={catButtons} />
	            	</div>
		            <div className="row">
		            	<div className="col-sm-4 form-group">
		            		<CardService />
		            	</div>
		            	<div className="col-sm-4 form-group">
		            		<CardService />
		            	</div>
		            	<div className="col-sm-4 form-group">
		            		<CardService />
		            	</div>
		            	<div className="col-sm-4 form-group">
		            		<CardService />
		            	</div>
		            	<div className="col-sm-4 form-group">
		            		<CardService />
		            	</div>
		            	<div className="col-sm-4 form-group">
		            		<CardService />
		            	</div>
		            </div>
	            </div>
			</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: {
            token: state.user.token
        }
    }
}

export default connect(
    mapStateToProps
)(Main)