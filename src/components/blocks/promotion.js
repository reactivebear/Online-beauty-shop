import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main'
import Price from 'components/price'
import Carousel from 'components/carousel'

class PromotionBlock extends Component { 

	printPromotionItem = (item, i) => {
		return <div key={i}>Item</div>
	}

	render() {
		const promotionCards = ['', '', '']
		const settings = {
			infinite: false,
			slidesToShow: 2,
			swipeToSlide: true,
		}
		return (
			<div>
				<div>Air plant you prorably haven't heard of them pour-over</div>
				<div className="d-flex align-items-center">
					<div className="w-60">
						<Carousel 
							items={promotionCards.map((item, i) => this.printPromotionItem(item, i))} 
							arrowType="promotions"
		        			settings={settings} />
					</div>
					<div className="mr-2 w-15 text-center">
						<Price style={{fontSize: 22}} current={72} old={140.90} />
					</div>
					<div>
						<BtnMain
	        				className="font-weight-bold mb-2 btn-block"
	        				title="Comprar agora" />
        				<BtnMain
	        				className="font-weight-bold btn-outline btn-block"
	        				title="Adicionar ao carrinho" />
					</div>
				</div>
			</div>
		)
	}
}

export default PromotionBlock