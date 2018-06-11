import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getService } from 'actions/services'
import Carousel from 'components/carousel'

class Company extends Component {
	componentWillMount() {
		store.dispatch(getService(this.props.match.params.id))
	}

    render() {
    	const { salon } = this.props.services
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
                <div className="bg-white py-3">
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
			</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        services: {
        	salon: state.services.salon
        }
    })

export default connect(
    mapStateToProps
)(Company)