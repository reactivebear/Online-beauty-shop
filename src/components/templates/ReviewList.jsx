import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReviewCard from './ReviewCard';

import { Api } from "../../api/api";

export default class ReviewList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: [
                { id: 1, name: "Hairtylist & Makeup", price: 200, image_url: "assets/images/p7.jpg" },
                { id: 2, name: "Barber", price: 100, image_url: "assets/images/p9.jpg" },
                { id: 3, }
            ]
        }
    }

    // componentDidMount() {
    //     this.reviewsID = setInterval(
    //         () => this.fetchFeaturedReviews(),
    //         1000
    //     );
    // }

    // //take all products featured and send that information to a list of products
    // fetchFeaturedReviews() {
    //     Api.get????()
    //         .then(res => {
    //             this.setState({
    //                 reviews: res.data.object
    //             });
    //         });
    // }

    // componentDidUpdate() {
    //     clearInterval(this.reviewsID);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.reviewsID);
    // }

    render() {
        return (
            <section className="review-section">
                <Col className="review-wrapper">
                    <Row className="show-grid review-list">
                        <Col className="person-wrapper">
                            <ReviewCard
                                products={this.state.reviews}>
                            </ReviewCard>
                        </Col>
                    </Row>
                </Col>
            </section>
        );
    }
}