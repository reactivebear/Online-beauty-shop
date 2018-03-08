import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Row, Col,FormGroup,FormControl,Button,Image,DropdownButton,MenuItem,Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import Loginform from './forms/loginTooltip.jsx';

export default class CustomNavbar extends Component {
  constructor() {
  super();
  this.state = {
      shown: false,
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }
  render() {
    var shownLogin = {
      display: this.state.shown ? "block" : "none"
    };
    var shownF = {
      display: this.state.shown ? "block" : "none"
    };
    return (
      <Navbar default collapseOnSelect  className="main-navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><Image src="assets/images/logo.png"  className="logo"/></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Row className="navbar-ul">
            <Nav  className="main-ul">
              <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                Hairtylist & Makeup
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                Barber
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                Depilation
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                Esthetic Clinics
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                Spa & Massage
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <Button type="button" className="btn btn-sm btn-success">Baixe grátis o app do Visual Total</Button>
              </NavItem>
            </Nav>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={9}>
              <div className="searchbar">
                <DropdownButton id="navdrop-dropdown" title="Todo" className="searchbarDropDown">
                   <MenuItem eventKey="1">Action</MenuItem>
                   <MenuItem eventKey="2">Another action</MenuItem>
                   <MenuItem eventKey="3" active>
                     Active Item
                   </MenuItem>
                   <MenuItem divider />
                   <MenuItem eventKey="4">Separated link</MenuItem>
                 </DropdownButton>
                <Navbar.Form pullLeft>
                  <FormGroup>
                    <FormControl type="text" placeholder="Buscar por produtos e serviços" />
                  </FormGroup>{' '}
                  <Button type="submit" className="btn btn-success"><Glyphicon glyph="search" /></Button>
                </Navbar.Form>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <Row className="show-grid">
                <Col xs={12} md={6}>
                  <div className="navbar-side">
                    <p>Olá. Faça seu login</p>
                    <p className="login-tooltip" onClick={this.toggle.bind(this)}><strong>Contas e Listas</strong></p>
                    <div id="logintooltipContent" style={ shownLogin }>
                      <h3>Identificação</h3>
                      <Loginform />
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="navbar-side">
                    <p>Meu</p>
                    <p><strong>Carrinho</strong></p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={1} md={1} className="location">
              <div onClick={this.toggle.bind(this)} className="lcationtooltip">
                <Glyphicon glyph="map-marker" />
              </div>
              <div id="locationtooltipContent" style={ shownF }>
                <h3>Identificação</h3>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <Row className="show-grid">
                <Col xs={12} md={6}>
                  <div className="navbar-side">
                    <p>Enviar para</p>
                    <p><strong>Bela Vista 01329900</strong></p>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="navbar-side">
                    <p>Encontre por</p>
                    <p><strong>Produtos &nbsp; Serviços</strong></p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
