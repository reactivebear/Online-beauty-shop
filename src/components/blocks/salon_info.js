import React, { Component } from 'react'
import AddressMap from 'components/map'

class SalonInfo extends Component {
	printSocial = (item, i) => {
		return 	<div key={i}>
					<h5 className="text-capitalize">{item.type}</h5>
    				<a target="_blank" href={`http://${item.url}`} className="color-grey">{item.url}</a>
				</div>
	}

    render() {
    	const { address, social_media } = this.props
        return (
        	<div className="row align-items-stretch">
	            <div className="col-sm-4 mb-2">
	            	<div className="rounded border p-3 h-100">
	            		<h5>Horários</h5>
	            	</div>
	            </div>
	            <div className="col-sm-4 mb-2">
	            	<div className="rounded border p-3 h-100">
	            		<h5>Endereço</h5>
	            		<span className="color-grey">{`${address.title}, ${address.number} ${address.street}`}</span>
	            		{
	            			address.latitude
	            			? 	<AddressMap {...address} />
	            			: 	''
	            		}
	            	</div>
	            </div>
	            <div className="col-sm-4 mb-2">
	            	<div className="rounded border p-3 h-100">
	            		<h5>Telefone</h5>
            			<span className="color-grey">{address.phone}</span>
	            		{ social_media.map((item, i) => this.printSocial(item, i)) }
	            	</div>
	            </div>
			</div>
        );
    }
}

export default SalonInfo