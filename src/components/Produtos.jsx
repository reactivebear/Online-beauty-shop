import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './Produtos.css';
import Filterdproducts from './produtos-page/Filterdproducts.jsx'
import FiltersBar from './templates/Filters-sidebar.jsx';
import Vistorecentemente from './produtos-page/Vistorecentemente.jsx';
import ProductsListView from './produtos-page/ProductsListView.jsx';
import {DropdownButton,MenuItem,} from 'react-bootstrap';


var active = "grid";

export default class Produtos extends Component {
  constructor(){
  super();
    this.state={view: "Grid"};
  }

  listview(){
    this.setState({view: "List"});
    active = "list";
  }
  gridview(){
    this.setState({view: "Grid"});
    active = "grid";
  }
  render() {
    return (
      <div className="produtos-page">
        <Grid>
          <div className="filters-bar">
            <h4>Organizar anúncios</h4>
            <div className="topbar">
            <DropdownButton id="navdrop-dropdown" title="Mais relevantes">
               <MenuItem eventKey="1">Action</MenuItem>
               <MenuItem eventKey="2">Another action</MenuItem>
               <MenuItem eventKey="3" active>
                 Active Item
               </MenuItem>
               <MenuItem divider />
               <MenuItem eventKey="4">Separated link</MenuItem>
             </DropdownButton>
             <div className={active} id="view-controls">
                <button onClick={this.listview.bind(this)} className="list">&nbsp;</button>
                <button onClick={this.gridview.bind(this)} className="grid">&nbsp;</button>
             </div>
            </div>
            <FiltersBar />
          </div>
          <div className="filterd-content" >
             {this.state.view === "Grid" && <GridView/>}
             {this.state.view === "List" && <ListView/>}
             <Vistorecentemente/>
          </div>
        </Grid>
      </div>
    )
  }
}
class GridView extends React.Component {
  render (){
    return (<Filterdproducts/>)
  }
}
class ListView extends React.Component {
  render (){
    return (<ProductsListView/>)
  }
}
