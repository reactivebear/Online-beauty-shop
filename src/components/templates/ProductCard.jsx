import React, { Component } from 'react'
import { Button, Image, Panel } from 'react-bootstrap'

export default class ProductCard extends Component {
    render () {
        return (
            <div className="product-card">
                <Panel className="card-frame">
                    <Panel.Body>
                        <div className="card-top">
                            <div className="product-img-holder">
                                <Image src="assets/images/p2.jpg"/>
                            </div>
                            <div className="product-info-holder">
                                <div className="product-title">
                                    <h3>Máscara Senscience Inner Restore Intensif 500 ml - Único</h3>
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
                                        140,00
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
        )
    }
}