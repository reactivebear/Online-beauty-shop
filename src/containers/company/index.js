import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getService, getServicesCategory } from 'actions/services'
import { getCategoriesByType, setCategory } from 'actions'
import { getProducts } from 'actions/products'
import Carousel from 'components/carousel'
import Tabs from 'components/tabs'
import Accordion from 'components/accordion'
import BtnMain from 'components/buttons/btn_main'
import { WEEK } from 'config'
import AddressMap from 'components/map'
import Stars from 'components/stars'
import { toggleModal, toggleLightBox } from 'actions/design'
import { CommentForm } from 'components/forms'
import Pagination from 'components/pagination'
import CardProduct from 'components/cards/product.js'

class Company extends Component {
    state = {
        orderClassFirst: 'order-2',
        orderClassLast: 'order-3'
    }

    constructor(props) {
        super(props)
        this.carouselItems = [
            {src: '/assets/images/default-image-square-big.png'},
            {src: '/assets/images/default-image-square-big.png'},
            {src: '/assets/images/default-image-square-big.png'},
            {src: '/assets/images/default-image-square-big.png'},
        ]
    }

	componentWillMount() {
		store.dispatch(getService(this.props.match.params.id))

        store.dispatch(getProducts('pagination', {new_pagination: true, page_size: 8, page: 1}))

        store.dispatch(getCategoriesByType('service')).then(res => {
            if (res) {
                store.dispatch(setCategory(res, 'service'))
                res.forEach(item => {
                    store.dispatch(getServicesCategory({category: item.id, page_size: 2}))
                })
            }
        })
	}

    showComment = () => e => {
        this.setState({
            orderClassFirst: 'order-3',
            orderClassLast: 'order-2'
        })
    }

    hideComment = () => e => {
        this.setState({
            orderClassFirst: 'order-2',
            orderClassLast: 'order-3'
        })
    }

    comment = () => {
        store.dispatch(toggleModal(true, CommentForm, 'modal-sm'))
    }

    toggleLightBox = i => {
        store.dispatch(toggleLightBox(true, this.carouselItems, i))
    }

    printProducts = (item, i) => <div key={i} className="col-lg-6 mb-3"><CardProduct {...item} /></div>

    changePage = page => {
        store.dispatch(getProducts('pagination', {new_pagination: true, page_size: 8, page: page}))
    }

    printSocial = (item, i) =>
        (
            <div key={i} className="mb-2">
                <div className="text-capitalize fs-18">{item.type}</div>
                <a target="_blank" href={`http://${item.url}`} className="color-grey">{item.url}</a>
            </div>
        )

    printProfessionals = (item, i) =>
        (    
            <div key={i} className="d-flex justify-content-start align-items-center">
                <div className="px-3 w-20"><img src="/assets/images/default-professional.png" alt="" className="img-fluid" /></div>
                <div>{item.user.first_name} {item.user.last_name}</div>
            </div>
        )

    getReviewList = () => {
        return  <div>
                    {
                        this.props.services.salon.reviews.map((item, i) => {
                            return  <div key={i}>
                                        <div className="d-flex">
                                            <div className="w-15 px-lg-3 px-sm-2 pr-2 pr-sm-0">
                                                <img src="/assets/images/default-reviewer.png" className="img-fluid" alt="" />
                                            </div>
                                            <div className="w-85">
                                                <div className="d-flex justify-content-between">
                                                    <h5>{ item.reviewer.username }</h5>
                                                    <div><Stars active={item.rating} /></div>
                                                </div>
                                                <div>
                                                    <span className="color-grey">{ item.comment }</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom col-12 pt-4 mb-4"></div>
                                    </div>
                        })
                    }
                    <div className="d-flex justify-content-center">
                        <BtnMain
                            className="font-weight-bold w-80"
                            onClick={this.comment}
                            title="Fazer comentário" />
                    </div>
                </div>
    }

    render() {
    	const { salon } = this.props.services
        const servicesCategories = this.props.categories.service
    	const products = this.props.product.pagination.items
    	const settings = {
            slidesToShow: 3,
            swipeToSlide: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                }
            ]
        }

        const carouselItems = this.carouselItems.map((item, i) => {
            return <img key={i} className="pointer" style={{width: '100%', maxHeight: 350}} src={item.src} alt="" />
        })

        return (
        	<div className="bg-main font-avenir py-5">
                <div className="bg-white pt-3 pb-5 mb-4">
            		<div className="container">
    	            	<div className="d-flex align-items-center">
    	            		<img src="/assets/icons/home-icon-grey.png" alt="" className="img-fluid img-icon-header pb-2" />
    	            		<span className="fs-22 px-3">{salon.name}</span>
                		</div>
                		<div>
                			<Carousel items={carouselItems} settings={settings} arrowType="rounded" onClickItem={this.toggleLightBox} />
                		</div>
                	</div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 order-1">
                            <Tabs
                                classNameHeader="bg-white"
                                classNameContent="pt-4"
                                styleHeader={{marginTop: -73}}
                                tabs={[
                                    {
                                        title: 'Serviços',
                                        onClick: this.hideComment,
                                        content: <Accordion list={servicesCategories} />
                                    }, {
                                        title: 'Profissionais',
                                        onClick: this.hideComment,
                                        content: <div className="bg-white p-3 rounded mb-3">{salon.professionals.map((item, i) => this.printProfessionals(item, i))}</div>
                                    }, {
                                        title: 'Avaliações',
                                        onClick: this.showComment,
                                        content: <div></div>
                                    }, {
                                        title: 'Produtos',
                                        onClick: this.hideComment,
                                        content:    <div>
                                                        <div className="row align-items-stretch">
                                                            { products.map((item, i) => this.printProducts(item, i)) }
                                                        </div>
                                                        <Pagination 
                                                            onChange={this.changePage} 
                                                            total={this.props.product.pagination.total_pages} 
                                                            active={this.props.product.pagination.page} />
                                                    </div>
                                    }]} />
                            <div className="d-none d-md-block">
                                {
                                    this.state.orderClassLast === 'order-3'
                                    ?   <div className="fs-22">Avaliações</div>
                                    :   ''
                                }
                                <div className="bg-white rounded p-3">
                                    {this.getReviewList()}
                                </div>
                            </div>
                        </div>
                        <div className={`col-lg-4 col-md-5 mb-3 ${this.state.orderClassFirst}`}>
                            <div className="bg-white rounded p-3">
                                <div className="color-grey mb-3">
                                    Um novo conceito em salão de beleza na Chácara Santo Antônio com foco na excelência no atendimento e prestação de serviços
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="fs-18">Horários</div>
                                    <div className="d-inline-block bg-green text-white px-2 py-1 rounded">Aberto</div>
                                </div>
                                <div className="mb-3">
                                    {
                                        WEEK.map((item, i) => 
                                        <div key={i} className="color-grey d-flex justify-content-between py-1">
                                            <div>{item}</div>
                                            <div>09:00 - 19:00</div>
                                        </div>)
                                    }
                                </div>
                                <div className="fs-18">Contatos</div>
                                <div className="color-grey">{salon.address.phone}</div>
                                <div className="color-grey mb-3">{salon.address.email}</div>
                                <div className="fs-18">Endereço</div>
                                <div className="mb-3">
                                    <div className="color-grey">{`${salon.address.title}, ${salon.address.number} ${salon.address.street}`}</div>
                                    {
                                        salon.address.latitude
                                        ?   <AddressMap {...salon.address} />
                                        :   ''
                                    }
                                </div>
                                { salon.social_media.map((item, i) => this.printSocial(item, i)) }
                            </div>
                        </div>
                        <div className={`col-lg-8 col-md-7 mb-3 d-block d-md-none ${this.state.orderClassLast}`}>
                            {
                                this.state.orderClassLast === 'order-3'
                                ?   <div className="fs-22">Avaliações</div>
                                :   ''
                            }
                            <div className="bg-white rounded p-3">
                                {this.getReviewList()}
                            </div>
                        </div>
                    </div>
                </div>
			</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        services: {
        	salon: state.services.salon
        },
        product: {
            pagination: state.products.pagination
        },
        categories: {
            service: state.categories.service
        }
    })

export default connect(
    mapStateToProps
)(Company)