import React, {Component} from 'react';
import SearchbarDropdownButton from './SearchbarDropdownButton.jsx';
import './SearchBar.css';

export default class SearchBar extends Component {
    render () {
        return (
            <div className="topnav">
                <SearchbarDropdownButton />
                <input type="text" placeholder="Buscar por produtos e serviços" />
                <button type="submit-search"><i class="fa fa-search"></i></button>
            </div>
        );
    }
}