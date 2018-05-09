import React from 'react'
import { Image, Panel } from 'react-bootstrap'
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

export default props => {
    const renderRows = () => {
        const reviews = props.reviews || [];
        return reviews.map(review => (
            <div className="review-card" key={review.id}>
                <Panel className="card-frame">
                    <Panel.Body>
                        <div className="card-top">
                            <div className="review-info-holder">
                                <div className="review-author">
                                    <h4>{review.author}</h4>
                                </div>
                                <div className="review-avaliation-holder">
                                    <div className="review-avaliation">
                                        <div className="star-rating">
                                            <span className="star-sm fill"></span>
                                            <span className="star-sm fill"></span>
                                            <span className="star-sm fill"></span>
                                            <span className="star-sm fill"></span>
                                            <span className="star-sm fill"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div className="review-text">
                                <p>{review.text}</p>
                            </div>
                        </div>
                    </Panel.Body>
                </Panel>
            </div>
        ));
    }

    return (
        <div className="review-list">
            {/* visibility: false for screens bellow small () */}
            <div className="d-none d-sm-block">
                {renderRows()}
            </div>

            {/* visibility: true for screens bellow small () */}
            <ReactResponsiveCarousel className="d-sm-none" showIndicators={false} showArrows={false} showThumbs={false} centerMode={"true"} emulateTouch={"true"} swipeScrollTolerance={8} showStatus={false}>
                {renderRows()}
            </ReactResponsiveCarousel>
        </div>
    )
}