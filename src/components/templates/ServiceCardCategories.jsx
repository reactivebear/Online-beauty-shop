import React from 'react';

export default props => {
    const renderRows = () => {
        const categories = props.category || [];

        return categories.map(category => {
            <button className="btn-card-category" >{category.name}</button>
        });
    }
    return (
        <div className="card-category-list">
            {renderRows()}
        </div>
    );
}