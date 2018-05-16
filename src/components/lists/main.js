import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getProducts } from 'actions/products.js'
import { getServices } from 'actions/services.js'
import CardProduct from 'components/cards/product.js'
import CardService from 'components/cards/service.js'

class ListMain extends Component {

    isEmptyData = data => ! data.length

    getData = type => {
        switch (type) {
            case 'products':
                store.dispatch(getProducts('recommended'))
            case 'services':
                store.dispatch(getServices('recommended'))
        }
    }

    componentDidMount() {
        const isEmptyData = this.isEmptyData(this.props[this.props.type].recommended)
        if (this.props.user.token && isEmptyData) {
            this.getData(this.props.type)
            
        }
    }

    componentWillReceiveProps(nextProps) {
        const isEmptyData = this.isEmptyData(nextProps[nextProps.type].recommended)
        if (nextProps.user.token && isEmptyData) {
            this.getData(nextProps.type)
        }
    }

    printList = (item, i) => {
        if (i < 6) {
            const component = this.props.type === 'products' ? <CardProduct {...item} /> : <CardService {...item} />
            return <div key={i} className="col-sm-4">{component}</div>
        }  
    }

    render() {
        const list = this.props[this.props.type].recommended
        return (
            <div className="row">
               { list.map((item, i) => this.printList(item, i)) }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: {
            token: state.user.token
        },
        products: {
            recommended: state.products.recommended
        },
        services: {
            recommended: state.services.recommended
        }
    }
}

export default connect(
    mapStateToProps
)(ListMain)