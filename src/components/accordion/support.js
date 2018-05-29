import React, { Component } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

class SupportAccordion extends Component {
	printAccordion = (item, i) =>
		(
    		<AccordionItem key={i} className="accordion-item mb-2 border rounded-top rounded-bottom">
                <AccordionItemTitle style={{outline: 'unset'}} className="accordion__title bg-white rounded-top rounded-bottom">
                    <div className="u-position-relative">
                        <h5>{ item.title }</h5>
                        <div className="accordion__arrow" role="presentation"></div>
                    </div>
                </AccordionItemTitle>
                <AccordionItemBody>
                    { item.body }
                </AccordionItemBody>
            </AccordionItem>
        )

	render() {
	        const list = this.props.list ? this.props.list : []
	        return (
	        	<Accordion className="border-0">
	                { list.map((item, i) => this.printAccordion(item, i)) }
	            </Accordion>
	        );
	    }
}

export default SupportAccordion