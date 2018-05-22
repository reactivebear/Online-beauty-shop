import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { toggleModal } from 'actions'
import Modal from 'react-responsive-modal'
import './style.css'

const emptyElement = props => <div></div>

class CustomModal extends Component {
	onCloseModal = () => {
		store.dispatch(toggleModal(false, emptyElement))
	}

    render() {
        const { open, content } = this.props.design.modal
        const component = !content ? emptyElement : React.createElement(content)
    	
        return (
        	<div>
		        <Modal open={open} onClose={this.onCloseModal} center showCloseIcon={false} classNames={{modal: 'rounded modal-body'}}>
		          	<div classname="modal-body">{component}</div>
		        </Modal>
	      	</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        design: {
            modal: state.design.modal
        }
    }
}

export default connect(
    mapStateToProps
)(CustomModal)