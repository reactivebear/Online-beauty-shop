import React, { Component } from 'react'
import { getDaysInMonth } from 'utils/date'
import Carousel from 'components/carousel'
import './style.css'

class Calendar extends Component {
	printDates = (item, i) => {
		return 	<div key={i} className="text-center px-4 py-3 pointer month-item">
					<div className="mb-3">{item.day}</div>
					<div>{item.date}</div>
				</div>
	}

    render() {
    	const settings = {
            slidesToShow: 5,
            swipeToSlide: true,
            infinite: false,
        }
        const times = ['9:00', '10:15', '12:30']
        return (
        	<div className="bg-white rounded">
        		<div className="row justify-content-center">
        			<div className="col-10">
		        		<Carousel 
		        			items={getDaysInMonth(this.props.month, this.props.year).map((item, i) => this.printDates(item, i))}
		        			arrowType="calendar"
		        			settings={settings} />
        			</div>
    			</div>

    			<div className="border-bottom"></div>
			</div>
        );
    }
}

export default Calendar