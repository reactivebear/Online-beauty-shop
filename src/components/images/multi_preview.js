import React, { Component } from 'react'
import store from 'store'
import { toggleLightBox } from 'actions/design'

class ImageMultiPreview extends Component {
	state = {
		display: 'block',
	}

	handleOnLoad = e => { this.setState({display: 'none'}) }

    setImage = num => e => {
        store.dispatch(toggleLightBox(false, [], num))
    }

    printSmallPreview = (item, i) => {
        const image = item.image_url 
                      ? <img onLoad={this.handleOnLoad} className="rounded img-fluid pointer" src={item.image_url} alt="" />
                      : <img className="img-fluid mb-1 pointer" src="/assets/images/default-image-square-small.png" alt="" />

        return  <div key={i} onClick={this.setImage(i)}>{ image }</div>
    }

    render() {
        let first = ''
        let other = []
        if (this.props.images && this.props.images.length) {
            [first, ...other] = this.props.images
        }
        other = other.length ? other : [{image_url: ''}, {image_url: ''}, {image_url: ''}]
        
        return (
        	<div className={this.props.className}>
                <div className="w-15">
                    { other.map((item, i) => this.printSmallPreview(item, i)) }
                </div>
                <div className="w-85 px-2 pointer" onClick={this.props.onClick}>
    	            <img className="img-fluid" style={{display: this.state.display}} src='/assets/images/default-image-square-big.png' alt="" />
            		<img onLoad={this.handleOnLoad} className="rounded img-fluid" src={first.image_url} alt="" />
                </div>
			</div>
        );
    }
}

export default ImageMultiPreview