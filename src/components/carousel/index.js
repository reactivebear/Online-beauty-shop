import React, { Component } from 'react'
import Slider from 'react-slick'
import PrevArrow from './prev_arrow.js'
import NextArrow from './next_arrow.js'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


class Carousel extends Component {
    printItems = (item, i) =>  <div key={i}>{item}</div>
    
    render() {
        const settings = {
            slidesToShow: 1,
            dots: false,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            infinite: true,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        arrows: false
                    }
                }
            ],
            ...this.props.settings
        };
        
        return (
            <Slider {...settings}>
                { this.props.items.map((item, i) => this.printItems(item, i))}
            </Slider>
        );
    }
}

export default Carousel