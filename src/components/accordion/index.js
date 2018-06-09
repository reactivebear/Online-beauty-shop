import React, { Component } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import BtnMain from 'components/buttons/btn_main.js'
import Price from 'components/price'

class CustomAccordion extends Component {
    printBody = (item, i, length) => {
        const last = length === i + 1
        return  <div key={i}>
                    <div className="row">
                        <div className="col-sm-6 mb-2">
                            <p><strong>{item.title}</strong></p>
                            <Price current={item.price} old={item.discount_price} />
                        </div>
                        <div className="col-sm-6">
                            <BtnMain
                                className="btn-outline font-weight-bold btn-block"
                                title="Adicionar ao carrinho" />
                            <BtnMain
                                className="font-weight-bold btn-block"
                                title="Agendar agora" />
                        </div>
                    </div>
                    { ! last ? <div className="border-bottom col-12 pt-4 mb-4"></div> : '' }
                </div>
    }

	printAccordion = (item, i) => {
        const list = item.list ? item.list : []
        
        return  <AccordionItem key={i} className="accordion-item mb-2 border rounded-top rounded-bottom">
                    <AccordionItemTitle style={{outline: 'unset'}} className="accordion__title bg-white rounded-top rounded-bottom">
                        <div className="u-position-relative">
                            <h5>{ item.name }</h5>
                            <div className="accordion__arrow" role="presentation"></div>
                        </div>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        { list.map((item, i) => this.printBody(item, i, list.length)) }
                    </AccordionItemBody>
                </AccordionItem>
    }

    render() {
        const list = this.props.list ? this.props.list : []
        return (
        	<Accordion className="border-0">
                { list.map((item, i) => this.printAccordion(item, i)) }
            </Accordion>
        );
    }
}

export default CustomAccordion