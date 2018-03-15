import React, { Component } from 'react'
import InputRange from 'react-input-range';
import { Panel,Glyphicon,Button,FormGroup} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './Filters-sidebar.css';
export default class FiltersBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value4: {
        min: 10,
        max: 500,
      }
    };
  }
  render() {
    return (
      <aside>
        <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title>Preço</Panel.Title>
            <Panel.Toggle componentClass="a"><Glyphicon glyph="menu-down"/></Panel.Toggle>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <form className="range-form">
                <div className="date-range">
                  <div>Min.</div>
                      <InputRange
                      maxValue={500}
                      minValue={10}
                      formatLabel={value => `${value}`}
                      value={this.state.value4}
                      onChange={value => this.setState({ value4: value })}
                      onChangeComplete={value => console.log(value)} />
                    <div>Max.</div>
                </div>
                <FormGroup className="submit-filter">
                  <Button bsSize="small" className="btn-success-trans" bsStyle="success" type="submit">Filtrar</Button>
                  <div className="chkbox">
                    <input type="checkbox" id="onlypromo" />
                    <label></label>
                    <label htmlFor="onlypromo" className="textlabel">Apenas promoções</label>
                  </div>
                </FormGroup>
              </form>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title>Distância</Panel.Title>
            <Panel.Toggle componentClass="a"><Glyphicon glyph="menu-down"/></Panel.Toggle>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title>Revisão de produtos</Panel.Title>
            <Panel.Toggle componentClass="a"><Glyphicon glyph="menu-down"/></Panel.Toggle>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <form className="review-form">
                <FormGroup>
                  <div className="chkbox">
                    <input type="radio" id="five" name="review" />
                    <label></label>
                    <label htmlFor="five" className="textlabel">
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                    </label>
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="chkbox">
                    <input type="radio" id="four" name="review"/>
                    <label></label>
                    <label htmlFor="four" className="textlabel">
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm"></span>
                    </label>
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="chkbox">
                    <input type="radio" id="three"name="review" />
                    <label></label>
                    <label htmlFor="three" className="textlabel">
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm"></span>
                      <span className="star-sm"></span>
                    </label>
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="chkbox">
                    <input type="radio" id="two" name="review"/>
                    <label></label>
                    <label htmlFor="two" className="textlabel">
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm"></span>
                      <span className="star-sm"></span>
                      <span className="star-sm"></span>
                    </label>
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="chkbox">
                    <input type="radio" id="one" name="review"/>
                    <label></label>
                    <label htmlFor="one" className="textlabel">
                      <span className="star-sm fill"></span>
                      <span className="star-sm"></span>
                      <span className="star-sm"></span>
                      <span className="star-sm"></span>
                      <span className="star-sm"></span>
                    </label>
                  </div>
                </FormGroup>
              </form>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title>Comentários do Vendedor</Panel.Title>
            <Panel.Toggle componentClass="a"><Glyphicon glyph="menu-down"/></Panel.Toggle>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title>Produtos</Panel.Title>
            <Panel.Toggle componentClass="a"><Glyphicon glyph="menu-down"/></Panel.Toggle>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <form className="products-form">
              <FormGroup>
                <div className="chkbox">
                  <input type="checkbox" id="anti-ager" name="review" />
                  <label></label>
                  <label htmlFor="anti-ager" className="textlabel">Anti-ager</label>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="chkbox">
                  <input type="checkbox" id="anti-wrinkle " name="review" />
                  <label></label>
                  <label htmlFor="anti-wrinkle " className="textlabel">Anti-wrinkle</label>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="chkbox">
                  <input type="checkbox" id="cleanser" name="review" />
                  <label></label>
                  <label htmlFor="cleanser" className="textlabel">Cleanser</label>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="chkbox">
                  <input type="checkbox" id="discoloration " name="review" />
                  <label></label>
                  <label htmlFor="discoloration " className="textlabel">Discoloration</label>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="chkbox">
                  <input type="checkbox" id="remover" name="review" />
                  <label></label>
                  <label htmlFor="remover" className="textlabel">Remover</label>
                </div>
              </FormGroup>
              </form>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title>Promoção</Panel.Title>
            <Panel.Toggle componentClass="a"><Glyphicon glyph="menu-down"/></Panel.Toggle>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </aside>
    )
  }
}
