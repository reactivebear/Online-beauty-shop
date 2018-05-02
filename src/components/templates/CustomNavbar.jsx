import React, { Component } from 'react'
import { Grid, Navbar, Nav, NavItem, Row, Col,FormGroup,FormControl,Button,Image,Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import DownloadAppBig from '../templates/DownloadAppBig.jsx';
import DownloadAppButtonSmall from '../templates/DownloadAppButtonSmall.jsx';
import NavbarRightSection from '../templates/NavbarRightSection.jsx';
// import SearchBar from '../templates/SearchBar.jsx';
import './CustomNavbar.css';
export default class CustomNavbar extends Component {

  constructor (props) {
    super(props);
    this.state = { dismissDownload: false };

    this.handleDismissClick = this.handleDismissClick.bind(this);
  }

  handleDismissClick () {
    this.setState (
      { dismissDownload: true }
    );
  }

  render() {
    return (
      <div className="header-nav">

        {!this.state.dismissDownload ?
          <div className="download-app-big d-block d-sm-none">
            <Nav>
              <NavItem>
                <h2>
                  <strong>Use grátis o app do Visual Total</strong>
                </h2>
                <button type="button" className="close" aria-label="Close"
                  onClick={this.handleDismissClick}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </NavItem>
              <NavItem>
                <p>
                  Descubra a melhor experiência na hora de comprar pela internet
                </p>
              </NavItem>
              <NavItem eventKey={1} href="#">
                <Button type="button" className="btn btn-sm btn-success btn-app" bsSize="xs"><i className="fa fa-mobile" aria-hidden="false"></i> Baixar</Button>
              </NavItem>
            </Nav>
          </div>
          :
          <span />
        }

        <Navbar default collapseOnSelect  className="main-navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><Image src="assets/images/LogoVisualTotal.png"  className="logo"/></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <DownloadAppButtonSmall   />
          
          <Navbar.Collapse />
          <Grid>
            <Row className="navbar-ul">
              <Nav  className="main-ul hidden-xs d-none d-sm-block">
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
              <Col className="navbar-left-section">
                <div className="searchbar">
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
        </Navbar>
      </div>
    );
  }
}
