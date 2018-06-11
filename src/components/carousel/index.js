import React, { Component } from 'react'
import Slider from 'react-slick'
import { PrevArrow, PrevArrowRounded } from './prev_arrow.js'
import { NextArrow, NextArrowRounded } from './next_arrow.js'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


class Carousel extends Component {
    printItems = (item, i) =>  <div key={i}>{item}</div>
    
    render() {
        const nextArrow = this.props.rounded ? <NextArrowRounded /> : <NextArrow />
        const prevArrow = this.props.rounded ? <PrevArrowRounded /> : <PrevArrow />

        const settings = {
            slidesToShow: 1,
            dots: false,
            nextArrow: nextArrow,
            prevArrow: prevArrow,
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