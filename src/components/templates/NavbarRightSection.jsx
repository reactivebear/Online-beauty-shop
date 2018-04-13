import React, {Component} from 'react';
import Headerlogin from '../tooltips/Headerlogin.jsx';
import Adicionar from '../tooltips/Adicionar-cep.jsx';
import Carttooltip from '../tooltips/Carttooltip.jsx';

export default class NavbarRightSection extends Component {
    render () {
        return (
            <table className="navbar-table">
                <tr>
                    <td className="location">
                        <td>
                            <td className="location-button">
                                <Adicionar />
                            </td>
                            <td>
                                <tr className="location-text-title">
                                    <p>Enviar para</p>
                                </tr>
                                <tr className="location-text">
                                    <p><strong>Bela Vista 01329900</strong></p>
                                </tr>
                            </td>
                        </td>
                    </td>
                    <td className="cart">
                        <tr>
                            <td className="cart-button">
                                <Carttooltip />
                            </td>
                            <td>
                                <tr className="cart-text-title">
                                    <p>Meu</p>
                                </tr>
                                <tr className="cart-text">
                                    <p><strong>Carrinho</strong></p>
                                </tr>
                            </td>
                        </tr>
                    </td>
                    <td className="login">
                        <tr>
                            <tr className="login-text-title">
                                <p>Bem vindo</p>
                            </tr>
                            <tr className="login-button">
                                <Headerlogin />
                            </tr>
                        </tr>
                    </td>
                </tr>
            </table>
        );
    }
}