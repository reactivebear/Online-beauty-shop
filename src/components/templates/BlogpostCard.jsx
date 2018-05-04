import React from 'react'
import { Image, Panel } from 'react-bootstrap'

export default props => {
    const renderRows = () => {
        const blogposts = props.blogposts || [];
        return blogposts.map(blogpost => (
            <div className="blogpost-card" key={blogpost.id}>
                <Panel className="card-frame">
                    <Panel.Body>
                        <div className="card-top">
                            <div className="blogpost-img-holder">
                                <Image src={blogpost.image_url} />
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div className="blogpost-info-holder">
                                <div className="blogpost-title">
                                    <h4>{blogpost.name}</h4>
                                </div>
                            </div>
                        </div>
                    </Panel.Body>
                </Panel>
            </div>
        ));
    }

    return (
        <div className="blogpost-list">
            {renderRows()}
        </div>
    )
}