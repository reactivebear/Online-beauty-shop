import React, {Component} from 'react';

export default class SearchBar extends Component {
    render () {
        return (
            <div className="topnav">
                <input type="text" placeholder="Buscar por produtos e serviços" />
                <button type="submit-search"><i class="fa fa-search"></i></button>
            </div>
        );
    }
}