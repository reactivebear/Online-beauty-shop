import React from 'react';
import { Image, Panel } from 'react-bootstrap';
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';


export default props => {
    const renderRows = () => {
        const catalogs = props.catalogs || [];
        return catalogs.map(catalog => (
            <div className = "catalog" key={catalog.id}>
                <Panel className="card-frame catalog-card">
                    <Panel.Body>
                        <div className="catalog-content">
                            <div className="catalog-icon">
                                <Image src={catalog.image_url} />
                            </div>
                            <div className="catalog-title">
                                <h4>{catalog.name}</h4>
                            </div>
                        </div>
                        <div className="arrow-icon">
                            <Image src="assets/icons/banner-arrow-right.png"/>
                        </div>
                    </Panel.Body>
                </Panel>
            </div>
        ));
    }

    return (
        <div className="catalog-list-holder">
            {/* visibility: false for screens bellow small */}
            <div className="catalog-list d-none d-sm-block">
                {renderRows()}
            </div>

            {/* visibility: true for screens bellow small */}
            <ReactResponsiveCarousel className="catalog-list d-sm-none" showIndicators={false} showArrows={false} showThumbs={false} centerMode={"true"} emulateTouch={"true"} swipeScrollTolerance={8} showStatus={false}>
                {renderRows()}
            </ReactResponsiveCarousel>
        </div>
    );
}