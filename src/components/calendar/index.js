import React, { Component } from 'react'
import { getDaysInMonth } from 'utils/date'
import Carousel from 'components/carousel'
import './style.css'

class Calendar extends Component {
	state = {
		activeTime: 0
	}

	setActiveTime = activeTime => e => {
		this.state.activeTime === activeTime ? this.setState({activeTime: 0}) : this.setState({activeTime})
	}

	printDates = (item, i) => {
		return 	<div key={i} className="text-center px-4 py-3 pointer month-item">
					<div className="mb-3">{item.day}</div>
					<div>{item.date}</div>
				</div>
	}

	printTimes = (item, i, length) => {
		const lastClass = i+1 === length ? '' : 'border-bottom'
		return 	<div key={i} className={`${lastClass} py-2 pl-4 pr-5 color-grey pointer d-flex justify-content-between`} onClick={this.setActiveTime(i+1)}>
					<div>{item}</div>
					{
						i+1 === this.state.activeTime
						?	<div><img src="/assets/icons/check-icon.png" alt="" className="img-fluid img-icon-header" /></div>
						: 	''
					}
				</div>
	}

    render() {
    	const settings = {
            slidesToShow: 5,
            swipeToSlide: true,
            infinite: false,
        }
        const times = ['9:00', '10:15', '12:30', '14:00', '15:30', '16:15', '17:45']
        return (
        	<div className="bg-white rounded overflow-hidden">
        		<div className="row justify-content-center">
        			<div className="col-10">
		        		<Carousel 
		        			items={getDaysInMonth(this.props.month, this.props.year).map((item, i) => this.printDates(item, i))}
		        			arrowType="calendar"
		        			settings={settings} />
        			</div>
    			</div>
    			<div className="border-bottom"></div>
    			<div className="wrap-calendar-times">
    				{ times.map((item, i) => this.printTimes(item, i, times.length)) }
    			</div>
			</div>
        );
    }
}

export default Calendar