import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getProducts } from 'actions/products.js'
import { getServices } from 'actions/services.js'
import CardProduct from 'components/cards/product.js'
import CardService from 'components/cards/service.js'
import CardProductSmall from 'components/cards/product_small.js'

class ListMain extends Component {

    isEmptyData = data => ! data.length

    getData = type => {
        switch (type) {
            case 'product':
                store.dispatch(getProducts('list', {page_size: 6}))
                break
            case 'service':
                store.dispatch(getServices('list', {page_size: 6}))
                break
            default: return
        }
    }

    componentDidMount() {
        const isEmptyData = this.isEmptyData(this.props[this.props.type].list)
        if (this.props.user.token && isEmptyData) {
            this.getData(this.props.type)
            
        }
    }

    componentWillReceiveProps(nextProps) {
        const isEmptyData = this.isEmptyData(nextProps[nextProps.type].list)
        if (nextProps.user.token && isEmptyData) {
            this.getData(nextProps.type)
        }
    }

    printList = (item, i) => {
        if (i < 6) {
            let component
            switch (this.props.type) {
                case 'product':
                    component = this.props.itemType === 'small' ? <CardProductSmall {...item} /> : <CardProduct {...item} />
                    break
                case 'service':
                    component = this.props.itemType === 'small' ? <CardService {...item} /> : <CardService {...item} />
                    break
                default: return
            }

            return <div key={i} className="col-sm-4">{component}</div>
        }   
    }

    render() {
        const list = this.props[this.props.type].list
        return (
            <div className="row">
               { list.map((item, i) => this.printList(item, i)) }
            </div>
        );
    }
}

const mapStateToProps = state =>
    ({
        user: {
            token: state.user.token
        },
        product: {
            list: state.products.list
        },
        service: {
            list: state.services.list
        }
    })

export default connect(
    mapStateToProps
)(ListMain)