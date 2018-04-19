import React from 'react';
import { Image, Panel } from 'react-bootstrap';


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
        <div className="catalog-list col-sm-6 col-md-4">
            {renderRows()}
        </div>
    )
}