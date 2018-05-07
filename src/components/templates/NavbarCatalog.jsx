import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default props => {
    const renderRows = () => {
        const catalogs = props.catalogs || [];
        return catalogs.map(catalog => (
            <NavItem key={catalog.id} componentClass={Link} href="/" to="/">
                { catalog.name }
            </NavItem>
        ));
    }

    return (
        <Nav className="main-ul hidden-xs d-none d-sm-block">
            { renderRows() }
        </Nav>
    )
}