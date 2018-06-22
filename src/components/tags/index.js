import React, { Component } from 'react'
import store, { history } from 'store'
import { getSearch } from 'actions'

class Tag extends Component {

	search = e => {
		e.preventDefault()
		const params = {search_text: this.props.title}
		store.dispatch(getSearch('pagination', {new_pagination: true, page_size: 6, ...params}))
		history.push('/search')
	}

    render() {
        return (
            <span className="tag bg-grey text-white" onClick={this.search}>{this.props.title}</span>
        );
    }
}

export default Tag