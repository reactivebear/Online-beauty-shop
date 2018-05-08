import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReviewCard from './ReviewCard';

import { Api } from "../../api/api";
import ReactCarousel from 'react-carousel';

export default class ReviewList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: [
                { id: 1, author: "Tony Start", text: "Lorem Ipsum is simply dumb text of the printing and typesetting industry." },
                { id: 2, author: "Jon Snow", text: "Lorem Ipsum is simply dumb text of the printing and typesetting industry." },
                { id: 3, author: "Bruce Wayne", text: "Lorem Ipsum is simply dumb text of the printing and typesetting industry." }
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
                                reviews={this.state.reviews}>
                            </ReviewCard>
                        </Col>
                    </Row>
                </Col>
            </section>
        );
    }
}