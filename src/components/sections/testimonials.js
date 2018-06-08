import React, { Component } from 'react'
import Carousel from 'components/carousel'
import CardTestimonial from 'components/cards/testimonial'

class TestimonialsSection extends Component {
	printList = () => {
		const list = [
			{
				reviewer: 'Tony',
				rating: 4,
				text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
			}, {
				reviewer: 'Antonio',
				rating: 3,
				text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
			}, {
				reviewer: 'Tony Stark',
				rating: 5,
				text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
			},

		]
		return list.map((item, i) => <CardTestimonial key={i} {...item} />)
	}
    render() {
    	const settings = {
            arrows: false,
            slidesToShow: 3,
            mobileFirst: true,
            swipeToSlide: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 576, 
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }

        return (
            <div className="bg-white px-3 py-5 mb-5 rounded border">
				<Carousel items={this.printList()} settings={settings} />
			</div>
        )
    }
}

export default TestimonialsSection