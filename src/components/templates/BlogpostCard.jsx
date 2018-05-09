import React from 'react'
import { Image, Panel } from 'react-bootstrap'
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

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