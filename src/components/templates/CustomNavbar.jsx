import React, { Component } from 'react'
import { Grid, Navbar, Nav, NavItem, Row, Col,FormGroup,FormControl,Button,Image,Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import NavbarRightSection from '../templates/NavbarRightSection.jsx';
// import SearchBar from '../templates/SearchBar.jsx';
export default class CustomNavbar extends Component {

  render() {
    return (
      <div className="header-nav">
        <Navbar default collapseOnSelect  className="main-navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><Image src="assets/images/LogoVisualTotal.png"  className="logo"/></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight className="download-app-button">
            <NavItem eventKey={1} href="#">
              <Button type="button" className="btn btn-sm btn-success btn-app" bsSize="xs"><i className="fa fa-mobile" aria-hidden="false"></i> Baixe grátis o app do Visual Total</Button>
            </NavItem>
          </Nav>
          <Navbar.Collapse>
            <Grid>
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
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={9} className="navbar-left-section">
                  <div className="searchbar hidden-xs">

                    {/* Campo de input de pesquisa da navbar, com react-bootstrap*/}
                    <Navbar.Form pullLeft>
                      <FormGroup>
                        <FormControl type="text" placeholder="Buscar por produtos e serviços" />
                      </FormGroup>{' '}
                      <Button type="submit" className="btn btn-success btn-magnifier"><Glyphicon glyph="search" /></Button>
                    </Navbar.Form>
                  </div>
                </Col>
                
                <NavbarRightSection />

              </Row>
            </Grid>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
