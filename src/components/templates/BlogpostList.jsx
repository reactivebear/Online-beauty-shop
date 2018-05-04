import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import BlogpostCard from './BlogpostCard';

// import { Api } from "../../api/api";

export default class BlogpostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogposts: [
                { id: 1, name: "Chromecast 2 Hdmi Edição 2017 Original 1080p Google New", image_url: "assets/images/b1.jpg" },
                { id: 2, name: "Chromecast 2 Hdmi Edição 2017 Original 1080p Google New", image_url: "assets/images/b2.jpg" },
                { id: 3, name: "Chromecast 2 Hdmi Edição 2017 Original 1080p Google New", image_url: "assets/images/b3.jpg" },
                { id: 4, name: "Chromecast 2 Hdmi Edição 2017 Original 1080p Google New", image_url: "assets/images/b4.jpg" }
            ]
        }
    }

    // componentDidMount() {
    //     this.blogpostsID = setInterval(
    //         () => this.fetchFeaturedBlogposts(),
    //         1000
    //     );
    // }

    // fetchFeaturedBlogposts() {
    //     Api.get????()
    //         .then(res => {
    //             this.setState({
    //                 blogposts: res.data.object
    //             });
    //         });
    // }

    // componentDidUpdate() {
    //     clearInterval(this.blogpostsID);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.blogpostsID);
    // }

    render() {
        return (
            <section className="blogpost-section">
                <Col className="person-wrapper">
                    <Row className="show-grid blogpost-list">
                        <Col className="person-wrapper">
                            <BlogpostCard
                                blogposts={this.state.blogposts}>
                            </BlogpostCard>
                        </Col>
                    </Row>
                </Col>
            </section>
        );
    }
}