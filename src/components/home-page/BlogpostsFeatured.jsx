import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import BlogpostList from '../templates/BlogpostList';

export default class BlogpostsFeatured extends Component {

    constructor(props) {
        super(props);
        this.state = { blogposts: [] };
    }

    render() {
        return (
            <section className="blogposts-section">
                <Col className="person-wrapper">
                    <div className="section-heading text-left">
                        <h3>Blog</h3>
                    </div>
                    <Row className="show-grid">
                        <BlogpostList list={this.state.blogposts}></BlogpostList>
                    </Row>
                </Col>
            </section>
        )
    }
}