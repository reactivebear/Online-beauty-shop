import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { history } from 'store'
import { getSearch, setSearch } from 'actions'
import CardProduct from 'components/cards/product'
import CardService from 'components/cards/service'
import Badge from 'components/badge'
import { getParams, getSearchText } from 'utils'

class Search extends Component {

    constructor() {
        super()
        history.listen((location, action) => {
            if (location.pathname === '/search') {
                this.search(location.hash)
            }
        })
    }

	printList = (item, i, type) => {
		const component = type === 'product' ? <CardProduct {...item} /> : <CardService {...item} />
        return <div key={i} className="col-md-6 col-lg-4 mb-3">{component}</div>
    }

    search = hash => {
        const params = getParams(hash.replace('#', ''))
        store.dispatch(setSearch({items: [], total_items: 0}, 'products'))
        store.dispatch(setSearch({items: [], total_items: 0}, 'services'))
        params.type.forEach(item => {
            store.dispatch(getSearch(item, {new_pagination: true, page_size: 6, ...params}))
        })
    }

    componentWillMount() {
        this.search(this.props.location.hash)
    }

    render() {
        const { products, services } = this.props.search
        return (
            <div className="bg-main font-avenir py-4">
    			<div className="container">
    				{
    					services.list.length
    					? 	<div>
    							<div className="d-flex justify-content-between align-items-center mb-3">
			    					<div><span className="fs-16">Serviços</span>&nbsp;&nbsp;<Badge count={services.all} /></div>
								</div>
								<div className="row mb-4">
									{ services.list.map((item, i) => this.printList(item, i, 'service')) }
								</div>
    						</div>
    					: 	''
    				} {
    					products.list.length
    					?	<div>
    							<div className="d-flex justify-content-between align-items-center mb-3">
			    					<div><span className="fs-16">Produtos</span>&nbsp;&nbsp;<Badge count={products.all} /></div>
								</div>
			    				<div className="row mb-4">
									{ products.list.map((item, i) => this.printList(item, i, 'product')) }
								</div>
    						</div>
    					: 	''
    				} {
                        ![...products.list, ...services.list].length
                        ?   <div className="row justify-content-center not-found-wrap">
                                <div className="col-xl-6 col-md-7 col-sm-10 col-12">
                                    <div className="font-avenir-light fs-38 mb-3">Ops... Não encontramos nenhum resultado para {getSearchText(this.props.location.hash)}.</div>
                                </div>
                            </div>
                        :   ''
                        
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