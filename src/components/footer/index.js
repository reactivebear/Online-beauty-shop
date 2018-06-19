import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main.js'

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-white pt-5 font-avenir">
                <div className="container">
                    <div className="row text-center justify-content-center">
                        <div className="col-lg-5 col-md-6 col-sm-8">
                            <div className="mb-3">
                                <img src="/assets/images/LogoVisualTotal.png" className="img-fluid" alt="" />
                            </div>
                            <div className="mb-3">
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <BtnMain
                                            className="btn-block"
                                            title={<span><img src="/assets/icons/app-icon.png" alt="" className="img-fluid small-icon mr-2" />Baixe grátis o app do Visual Total</span>} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3 mb-sm-4 color-grey">
                        <div className="col-sm col-12">
                            <div className="mb-3"><strong>Quem somos</strong></div>
                            <div className="font-italic mb-1">Sobre o App</div>
                            <div className="font-italic mb-1">Sobre o Blog</div>
                            <div className="border-bottom border-white w-100 d-sm-none mb-3"></div>
                        </div>
                        
                        <div className="col-sm col-12">
                            <div className="mb-3"><strong>Vantagens para clientes</strong></div>
                            <div className="font-italic mb-1">Ofereça seus serviços</div>
                            <div className="font-italic mb-1">Anuncie seus produtos</div>
                            <div className="border-bottom border-white w-100 d-sm-none mb-3"></div>
                        </div>
                        <div className="col-sm col-12">
                            <div className="mb-3"><strong>Localização</strong></div>
                            <div className="font-italic mb-2">Rua Girassol, 1158 - Vila Madalena, São Paulo - SP</div>
                            <div className="font-italic mb-1">Rua Girassol, 1158 - Vila Madalena, São Paulo - SP</div>
                            <div className="border-bottom border-white w-100 d-sm-none mb-3"></div>
                        </div>
                        <div className="col-sm col-12">
                            <div className="mb-3"><strong>Conecte-se conosco</strong></div>
                            <div className="font-italic mb-1">(55) +11 3003-0230</div>
                            <div className="font-italic mb-1">visualtotal@contato.com.br</div>
                            <div className="border-bottom border-white w-100 d-sm-none mb-3"></div>
                        </div>
                        <div className="col-sm col-12">
                            <div className="mb-3"><strong>Sobre a WeMind Group</strong></div>
                            <div className="font-italic mb-1">Carreiras</div>
                            <div className="font-italic mb-1">Conheça a WeMind</div>
                            <div className="border-bottom border-white w-100 d-sm-none mb-3"></div>
                        </div>
                    </div>

                    <div className="row border-bottom border-white pb-3 mb-4 align-items-end">
                        <div className="col-sm-6 text-right">
                            <div className="row align-items-end mb-5 mb-sm-0">
                                <div className="col-sm col-5 text-xs-left">
                                    <img src="/assets/icons/facebook-icon.png" alt="" className="footer-icon px-sm-2 px-1" />
                                    <img src="/assets/icons/instagram-icon.png" alt="" className="footer-icon px-sm-2 px-1" />
                                </div>
                                <div className="col-sm col-7 text-left">
                                    <p>Selecione um país/região</p>
                                    <select className="form-control h-75">
                                        <option value="br">Brazil - Português</option>
                                        <option value="en">EUA - English</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 order-sm-first color-grey">
                            <span>Uma empresa WeMind Group - www.wemindgroup.com</span>
                        </div>
                    </div>
                    <div className="pb-2 color-grey">© WeMind 2018 - TODOS OS DIREITOS RESERVADOS.</div>
                </div>
            </footer>
        )
    }
}

export default Footer
