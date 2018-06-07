import React, { Component } from 'react'
import CategoryItem from 'components/cards/category.js'
import Carousel from 'components/carousel'
import ListMain from 'components/lists/main.js'

class MainSection extends Component {
    printCategories = (item, i) => <div className="col"><CategoryItem key={i} {...item} /></div>

    printMobileCategories = () => this.props.categories.map((item, i) => <CategoryItem key={i} {...item} type={this.props.type} />)
    
    render() {
        const settings = {
            arrows: false,
            slidesToShow: 6,
            mobileFirst: true,
            swipeToSlide: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 2.5,
                    }
                }
            ]
        }
        return (
            <div>
                <div className="form-group">
                    <div className="fs-28">Catálogo de <strong>{this.props.title}</strong></div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-8">
                            <div>
                                <Carousel items={this.printMobileCategories()} settings={settings} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="fs-28"><span className="text-capitalize">{this.props.title}</span> em <strong>destaque</strong></div>
                </div>
                <ListMain type={this.props.type} />
            </div>    
        );
    }
}

export default MainSection