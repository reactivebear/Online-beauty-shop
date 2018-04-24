import React from 'react'
import { Image, Panel } from 'react-bootstrap'

export default props => {
    const renderRows = () => {
        const services = props.services || [];
        return services.map(service => (
            <div className="product-card service-card" key={service.id}>
                <Panel className="card-frame">
                    <Panel.Body>
                        <div className="card-top">
                            <div className="product-img-holder service-img-holder">
                                <Image src={service.image_url} />
                            </div>
                            <div className="product-info-holder service-info-holder">
                                <div className="product-title service-title">
                                    <h4>{service.title}</h4>
                                </div>
                                <div className="product-avaliation-holder service-avaliation-holder">
                                    <div className="product-avaliation service-avaliation">
                                        Avaliação
                                        <div className="star-rating">
                                            <span className="star-sm fill"></span>
                                            <span className="star-sm fill"></span>
                                            <span className="star-sm fill"></span>
                                            <span className="star-sm fill"></span>
                                            <span className="star-sm fill"></span>
                                        </div>
                                    </div>
                                    <div className="add-wishlist">
                                        <span className="icon heart-green"></span>
                                    </div>
                                </div>
                                <div className="product-price-holder service-price-holder">
                                    {/* {!service.discount_price ? 
                                    null
                                    : <div className="old-price price">
                                        R$ {service.price}
                                    </div>} */}
                                    <div className="now-price price">
                                        R$ {service.price}
                                        {/* {service.discount_price || service.price} */}
                                        <div className="zero-zero">
                                        ,00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div className="btn-green">
                                <button className="btn-buy-now btn btn-sm">
                                    Comprar Agora
                                </button>
                            </div>
                            <div className="btn-white">
                                <button className="btn-add-to-cart btn btn-sm">
                                    Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    </Panel.Body>
                </Panel>
            </div>
        ));
    }

    return (
        <div className="catalog-list">
            {renderRows()}
        </div>
    )
}