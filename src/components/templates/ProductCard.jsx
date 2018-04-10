import React, { Component } from 'react'
import { Button, Image, Panel } from 'react-bootstrap'

export default props => {

    let product_title = '';

    const render = () => {
        const list = props.list || [];
        
        return list.map(info => (
            <div className="product-card">
                <Panel className="card-frame">
                    <Panel.Body>
                        <div className="card-top">
                            <div className="product-img-holder">
                                <Image src="assets/images/p2.jpg"/>
                            </div>
                            <div className="product-info-holder">
                                <div className="product-title">
                                    <h3>{product_title}</h3>
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
                                    <div className="add-wishlet">
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
                                <Button className="btn btn-sm btn-success">
                                    Comprar Agora
                                </Button>
                            </div>
                            <div>
                                <Button className="btn btn-sm btn-success">
                                    Adicionar ao Carrinho
                                </Button>
                            </div>
                        </div>
                    </Panel.Body>
                </Panel>
            </div>
        ))
    }
}