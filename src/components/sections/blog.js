import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import Carousel from 'components/carousel'
import CardBlog from 'components/cards/blog'
import { getBlogs } from 'actions'

class BlogSection extends Component {

	componentWillMount() {
		store.dispatch(getBlogs())
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
                    <Carousel items={this.props.design.blogs.map((item, i) => <CardBlog key={i} {...item} />)} settings={settings} />
                </div>
			</div>
        )
    }
}

const mapStateToProps = state =>
    ({ 
        design: {
            blogs: state.design.blogs
        }
    })

export default connect(
    mapStateToProps
)(BlogSection)