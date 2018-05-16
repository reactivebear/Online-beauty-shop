import React, { Component } from 'react'
import { Grid, Navbar, Nav, NavItem, Row, Col,FormGroup,FormControl,Button,Image,Glyphicon} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DownloadAppButtonSmall from '../templates/DownloadAppButtonSmall.jsx'
import NavbarRightSection from '../templates/NavbarRightSection.jsx'
import BtnMain from 'components/buttons/btn_main.js'
import Search from 'components/search'

export default class CustomNavbar extends Component {
    state = {dismissDownload: false}

    handleDismissClick = () => {
        this.setState (
            { dismissDownload: true }
        );
    }

    render() {
        return (
            <div className="header-nav">
                {  
                    ! this.state.dismissDownload 
                    ?   <div className="row download-app-big p-5 d-sm-none">
                            <div className="d-block text-center text-white">
                                <div className="form-group">
                                    <strong>Use grátis o app do Visual Total</strong>
                                    <i onClick={this.handleDismissClick} className="fa fa-times float-right" aria-hidden="true"></i>
                                </div>
                                <div className="form-group">
                                    <span>Descubra a melhor experiência na hora de comprar pela internet</span>
                                </div>
                                <BtnMain
                                    className="btn-block"
                                    title="Baixar" />
                            </div>
                        </div>
                    :   ''
                }

                <div className="bg-dark effect6 pt-46 pb-77">
                    <div className="container text-white">
                        <div className="row font-avenir mb-26">
                            <div className="col-sm-2 align-self-end">
                                <img src="assets/img/logo.png" alt="" className="img-fluid logo" />
                            </div>
                            <div className="col align-self-end">
                                <span>Hairtylist & Makeup</span>
                            </div>
                            <div className="col align-self-end">
                                <span>Barber</span>
                            </div>
                            <div className="col align-self-end">
                                <span>Depilation</span>
                            </div>
                            <div className="col align-self-end">
                                <span>Spa & Massage</span>
                            </div>
                            <div className="col align-self-end">
                                <span>Esthetic Clinics</span>
                            </div>
                            <div className="col align-self-start">
                                <BtnMain
                                        title="Baixe grátis o app do Visual Total" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Search />
                            </div>
                            <div className="col-md-auto">
                                Enviar para<br />
                                <strong>Bela Vista 01329900</strong>
                            </div>
                            <div className="col col-lg-2">
                                Meu<br />
                                <strong>Carrinho</strong>
                            </div>
                            <div className="col col-lg-2">
                                Bem vindo<br />
                                <strong>Entre ou cadastre-se</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
