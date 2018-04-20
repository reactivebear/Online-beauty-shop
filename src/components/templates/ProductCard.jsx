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
                                    <h3>{product.name}</h3>
                                </div>
                                <div className="product-avaliation-holder">
                                    Avaliação
                                    <div className="star-rating">
                                        <span className="star-sm fill"></span>
                                        <span className="star-sm fill"></span>
                                        <span className="star-sm fill"></span>
                                        <span className="star-sm fill"></span>
                                        <span className="star-sm fill"></span>
                                    </div>
                                    <div className="add-wishlist">
                                        <span className="icon heart-green"></span>
                                    </div>
                                </div>
                                <div className="product-price-holder">
                                    <div className="old-price">
                                        144,00
                                    </div>
                                    <div className="now-price">
                                        72,00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div>
                                <button className="btn-buy-now btn btn-sm">
                                    Comprar Agora
                                </button>
                            </div>
                            <div>
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