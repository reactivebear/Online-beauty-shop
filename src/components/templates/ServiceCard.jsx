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
                            <div className="service-category-holder">
                                <div className="service-category">
                                    {/* <button className=""></button> */}
                                </div>
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
                                <div className="store-name-holder">
                                    <div className="store-name">Nino Garcia Hair</div>
                                </div>
                                <div className="store-address-holder">
                                    <div className="store-address">Avenida Pedroso de Morais, 1017 - Pinheiros</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div className="btn-white">
                                <button className="btn-add-to-cart btn-schedule-now btn btn-sm">
                                    Agendar agora
                                </button>
                            </div>
                            <div className="btn-white">
                                <button className="btn-add-to-cart btn btn-sm">
                                    Adicionar ao carrinho
                                </button>
                            </div>
                            <div className="btn-green">
                                <button className="btn-buy-now btn-show-services btn btn-sm">
                                    Exibir serviços
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