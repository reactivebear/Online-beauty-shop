import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import ReviewList from '../templates/ReviewList';

export default class ReviewsFeatured extends Component {

    constructor(props) {
        super(props);
        this.state = { reviews: [] };
    }

    render() {
        return (
            <section className="reviews-section">
                <Col className="person-wrapper">
                    <Row className="show-grid">
                        <ReviewList list={this.state.reviews}></ReviewList>
                    </Row>
                </Col>
            </section>
        )
    }
}