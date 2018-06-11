import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getService, getServicesCategory } from 'actions/services'
import { getCategoriesByType, setCategory } from 'actions'
import Carousel from 'components/carousel'
import Tabs from 'components/tabs'
import Accordion from 'components/accordion'

class Company extends Component {
	componentWillMount() {
		store.dispatch(getService(this.props.match.params.id))
        store.dispatch(getCategoriesByType('service')).then(res => {
            if (res) {
                store.dispatch(setCategory(res, 'service'))
                res.forEach(item => {
                    store.dispatch(getServicesCategory({category: item.id, page_size: 2}))
                })
            }
        })
	}

    render() {
    	const { salon } = this.props.services
        const servicesCategories = this.props.categories.service
    	console.log(salon)
    	const settings = {
            slidesToShow: 3,
            swipeToSlide: true,
            infinite: false,
        }
    	const carouselItems = [
    		<img style={{width: '100%', maxHeight: 350}} src="/assets/images/default-image-square-big.png" alt="" />, 
    		<img style={{width: '100%', maxHeight: 350}} src="/assets/images/default-image-square-big.png" alt="" />, 
    		<img style={{width: '100%', maxHeight: 350}} src="/assets/images/default-image-square-big.png" alt="" />,
    		<img style={{width: '100%', maxHeight: 350}} src="/assets/images/default-image-square-big.png" alt="" />,
		]

        return (
        	<div className="bg-main font-avenir py-5">
                <div className="bg-white pt-3 pb-5 mb-4">
            		<div className="container">
    	            	<div className="d-flex align-items-center">
    	            		<img src="/assets/icons/home-icon-grey.png" alt="" className="img-fluid img-icon-header pb-2" />
    	            		<span className="fs-22 px-3">{salon.name}</span>
                		</div>
                		<div>
                			<Carousel items={carouselItems} settings={settings} rounded />
                		</div>
                        
                	</div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Tabs
                                classNameHeader="bg-white"
                                classNameContent="pt-4"
                                styleHeader={{marginTop: -66}}
                                tabs={[
                                    {
                                        title: 'Serviços',
                                        content: <Accordion list={servicesCategories} />
                                    }, {
                                        title: 'Profissionais',
                                        content: <div></div>
                                    }, {
                                        title: 'Avaliações',
                                        content: <div></div>
                                    }, {
                                        title: 'Produtos',
                                        content: <div></div>
                                    }]} />
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded p-3">
                                <div className="color-grey">
                                    Um novo conceito em salão de beleza na Chácara Santo Antônio com foco na excelência no atendimento e prestação de serviços
                                </div>
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
        categories: {
            service: state.categories.service
        }
    })

export default connect(
    mapStateToProps
)(Company)