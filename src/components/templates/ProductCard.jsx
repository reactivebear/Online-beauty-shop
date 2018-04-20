import React from 'react'
import { Image, Panel } from 'react-bootstrap'

export default props => {
    const renderRows = () => {
        const products = props.products || [];
        return products.map(product => (
            <div className="product-card" key={product.id}>
                <Panel className="card-frame">
                    <Panel.Body>
                        <div className="card-top">
                            <div className="product-img-holder">
                                <Image src={product.image_url} />
                            </div>
                            <div className="product-info-holder">
                                <div className="product-title">
                                    <h4>{product.name}</h4>
                                </div>
                                <div className="product-avaliation-holder">
                                    <div className="product-avaliation">
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
                                <div className="product-price-holder">
                                    {!product.discount_price ? 
                                    null
                                    : <div className="old-price price">
                                        R$ {product.price}
                                    </div>}
                                    <div className="now-price price">
                                        R$ {product.discount_price || product.price}
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