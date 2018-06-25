import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardProduct from 'components/cards/product'
import CardService from 'components/cards/service'
import Badge from 'components/badge'

class Search extends Component {

	printList = (item, i, type) => {
		const component = type === 'product' ? <CardProduct {...item} /> : <CardService {...item} />
        return <div key={i} className="col-md-6 col-lg-4 mb-3">{component}</div>
    }

    render() {
    	const { product, service } = this.props.search
        return (
            <div className="bg-main font-avenir py-4">
    			<div className="container">
    				{
    					service.length
    					? 	<div>
    							<div className="d-flex justify-content-between align-items-center mb-3">
			    					<div><span className="fs-16">Serviços</span>&nbsp;&nbsp;<Badge count={10} /></div>
								</div>
								<div className="row mb-4">
									{ service.map((item, i) => this.printList(item, i, 'service')) }
								</div>
    						</div>
    					: 	''
    				} {
    					product.length
    					?	<div>
    							<div className="d-flex justify-content-between align-items-center mb-3">
			    					<div><span className="fs-16">Produtos</span>&nbsp;&nbsp;<Badge count={5} /></div>
								</div>
			    				<div className="row mb-4">
									{ product.map((item, i) => this.printList(item, i, 'product')) }
								</div>
    						</div>
    					: 	''
    				}
    			</div>
			</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        search: state.search,
    })

export default connect(
    mapStateToProps
)(Search)