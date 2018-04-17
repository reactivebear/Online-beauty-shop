import React, {Component} from 'react';
import {Button, Image, Panel} from 'react-bootstrap';


export default props => {
    const renderRows = () => {
        const catalogs = props.catalogs || [];
        return catalogs.map(catalog => (
            <div className = "product" key={catalog.catalogId}>
                <Button>
                    <Panel className="card-frame">
                        <Panel.Body>
                            <div className="product">
                                <Image src={catalog.catalogImg} />
                            </div>
                            <div className="catalog-title">
                                <h4>{catalog.catalogTitle}</h4>
                            </div>
                        </Panel.Body>
                    </Panel>
                </Button>
            </div>
        ));
    }

    return (
        <div className="catalog-list">
            {renderRows()}
        </div>
    )
}