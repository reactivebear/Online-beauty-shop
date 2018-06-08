import React, { Component } from 'react'
import Carousel from 'components/carousel'
import CardBlog from 'components/cards/blog'

class BlogSection extends Component {

	printList = () => {
		const list = [
			{
				img: '/assets/images/blog.png',
				tags: 'Insights Hair style Yr retro brunch',
				text: 'Pickled single-origin coffee blue  bottle venmo messenger bag  hammock',
				desc: 'Por Evelyn Rodrigues',
				date: '16/04/2018 - 08h00'
			}, {
				img: '/assets/images/blog.png',
				tags: 'Insights Hair style Yr retro brunch',
				text: 'Pickled single-origin coffee blue  bottle venmo messenger bag  hammock',
				desc: 'Por Evelyn Rodrigues',
				date: '16/04/2018 - 08h00'
			}, {
				img: '/assets/images/blog.png',
				tags: 'Insights Hair style Yr retro brunch',
				text: 'Pickled single-origin coffee blue  bottle venmo messenger bag  hammock',
				desc: 'Por Evelyn Rodrigues',
				date: '16/04/2018 - 08h00'
			}, {	
				img: '/assets/images/blog.png',
				tags: 'Insights Hair style Yr retro brunch',
				text: 'Pickled single-origin coffee blue  bottle venmo messenger bag  hammock',
				desc: 'Por Evelyn Rodrigues',
				date: '16/04/2018 - 08h00'
			}
		]

		return list.map((item, i) => <CardBlog first={i===0} last={i===list.length-1} key={i} {...item} />)
	}

    render() {
    	const settings = {
            arrows: false,
            slidesToShow: 4,
            swipeToSlide: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 576, 
                    settings: {
                        slidesToShow: 1,
                    }
                }, {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                	breakpoint: 992, 
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        }

        return (
            <div>
				<div className="form-group">
                    <h2>Blog</h2>
                    <Carousel items={this.printList()} settings={settings} />
                </div>
			</div>
        )
    }
}

export default BlogSection