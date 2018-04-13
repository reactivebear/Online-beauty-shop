import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import './SearchbarDropdownButton.css';

export default class SearchbarDropdownButton extends Component {
    constructor () {

        super ();

        function myFunction(params) {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        window.onclick = function (e) {
            if (e.target.matches('.dropbtn')) {
                var myDropdown = document.getElementById("myDropdown");
                if (myDropdown.classList.contains('show')) {
                    myDropdown.classList.remove('show');
                } else {
                    myDropdown.classList.add('show');
                }
            }
        }
    }

    render () {
        return (
            <div className="custom-dropdown">
                <button onClick="myFunction()" class="dropbtn">
                    Todos
                        <image src="../../assets/icons/drp-arrow.png" alt="options" className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content show" id="myDropdown">
                    <a href="#">!</a>
                    <a href="#">Action</a>
                    <a href="#">Another action</a>
                    <a href="#">Active Item</a>
                    <a href="#">Separated Link</a>
                </div>
            </div>
            
        );
    }
}