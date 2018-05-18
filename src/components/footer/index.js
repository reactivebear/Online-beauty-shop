import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Col, DropdownButton, Grid, Image, MenuItem, Row} from 'react-bootstrap';
import BtnMain from 'components/buttons/btn_main.js'

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-white pt-5 font-avenir">
                <div className="container">
                    <div className="row mb-5 text-center">
                        <div className="col-sm-4 col-sm-offset-4">
                            <div className="mb-5">
                                <Image src="assets/images/LogoVisualTotal.png" />
                            </div>
                            <div className="mb-3">
                                <BtnMain
                                    title="Baixe grátis o app do Visual Total" />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-sm col-xs-12">
                            <h3 className="mb-5">Quem somos</h3>
                            <p className="font-italic">Sobre o App</p>
                            <p className="font-italic">Sobre o Blog</p>
                            <div className="border-bottom border-white w-100 d-sm-none mb-5"></div>
                        </div>
                        
                        <div className="col-sm col-xs-12">
                            <h3 className="mb-5">Vantagens para clientes</h3>
                            <p className="font-italic">Ofereça seus serviços</p>
                            <p className="font-italic">Anuncie seus produtos</p>
                            <div className="border-bottom border-white w-100 d-sm-none mb-5"></div>
                        </div>
                        <div className="col-sm col-xs-12">
                            <h3 className="mb-5">Localização</h3>
                            <p className="font-italic">Rua Girassol, 1158 - Vila Madalena, São Paulo - SP</p>
                            <p className="font-italic">Rua Girassol, 1158 - Vila Madalena, São Paulo - SP</p>
                            <div className="border-bottom border-white w-100 d-sm-none mb-5"></div>
                        </div>
                        <div className="col-sm col-xs-12">
                            <h3 className="mb-5">Conecte-se conosco</h3>
                            <p className="font-italic">(55) +11 3003-0230</p>
                            <p className="font-italic">visualtotal@contato.com.br</p>
                            <div className="border-bottom border-white w-100 d-sm-none mb-5"></div>
                        </div>
                        <div className="col-sm col-xs-12">
                            <h3 className="mb-5">Sobre a WeMind Group</h3>
                            <p className="font-italic">Carreiras</p>
                            <p className="font-italic">Conheça a WeMind</p>
                            <div className="border-bottom border-white w-100 d-sm-none mb-5"></div>
                        </div>
                    </div>

                    <div className="row border-bottom border-white pb-3 mb-5 align-items-end">
                        <div className="col-sm-6 text-right">
                            <div className="row align-items-end mb-5 mb-sm-0">
                                <div className="col-sm col-xs-4">
                                    <img src="assets/icons/facebook-icon.png" className="footer-icon px-2" />
                                    <img src="assets/icons/instagram-icon.png" className="footer-icon px-2" />
                                </div>
                                <div className="col-sm col-xs-8 text-left">
                                    <p>Selecione um país/região</p>
                                    <select className="form-control form-control-lg">
                                        <option value="br">Brazil - Português</option>
                                        <option value="en">EUA - English</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 order-sm-first">
                            <span>Uma empresa WeMind Group - www.wemindgroup.com</span>
                        </div>
                    </div>
                    <p>© WeMind 2018 - TODOS OS DIREITOS RESERVADOS.</p>
                </div>
            </footer>
        )
    }
}

export default Footer
