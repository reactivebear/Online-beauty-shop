import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImagePreview from 'components/images/preview'
import Price from 'components/price'
import moment from 'moment'

class ServiceCart extends Component {
	getDuration = () => {
		let temp = ''
		for (let k in moment.duration(this.props.duration)._data) {
			if (moment.duration(this.props.duration)._data[k]) {
				temp += `${moment.duration(this.props.duration)._data[k]} ${k} `
			}
		}
		return temp
	}

    render() {
    	const { salon } = this.props
        return (
        	<div className="bg-white px-3 py-3 rounded">
	            <div className="fs-16 mb-3">
	            	{this.props.title}
            	</div>
            	<Price current={this.props.price} />
	            <div className="color-grey mb-2">{ this.getDuration() }</div>
	            <div className="border-bottom mb-2  mr--3 ml--3"></div>
	            {
	            	salon.professionals.length
	            	? 	<div className="d-flex justify-content-between mb-2">
	            			<div className="color-grey">{`com ${salon.professionals[0].user.first_name} ${salon.professionals[0].user.first_name}`}</div>
		            		<div className="pointer color-green">Alterar</div>
	            		</div>
	            	: 	''
	            }
	            <div className="border-bottom mb-2 mr--3 ml--3"></div>
            	<div className="color-grey">{`${salon.address.title}, ${salon.address.number} ${salon.address.street}`}</div>
			</div>
        );
    }
}

export default ServiceCart