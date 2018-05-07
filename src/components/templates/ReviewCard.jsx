import React from 'react'
import { Image, Panel } from 'react-bootstrap'

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
            {renderRows()}
        </div>
    )
}