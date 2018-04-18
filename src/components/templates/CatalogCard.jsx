import React from 'react';
import { Image, Panel } from 'react-bootstrap';


export default props => {
    const renderRows = () => {
        const catalogs = props.catalogs || [];
        return catalogs.map(catalog => (
            <li className = "product" key={catalog.id}>
                <Panel className="card-frame catalog-card">
                    <Panel.Body>
                        <div className="product">
                            <Image src={catalog.image_url} />
                        </div>
                        <div className="catalog-title">
                            <h4>{catalog.name}</h4>
                        </div>
                    </Panel.Body>
                </Panel>
            </li>
        ));
    }

    return (
        <div className="catalog-list col-sm-6 col-md-4">
            {renderRows()}
        </div>
    )
}