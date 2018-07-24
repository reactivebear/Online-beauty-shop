import React from 'react'
import style from './style.css' 

const NextArrow = props =>
	(
        <div className={`${style.nextArrow}  ${style.wrap}`} onClick={props.onClick}>
            <img style={{width: 30}} src="/assets/icons/icons8-chevron-right-48.png" alt="" />
        </div>
    )

const NextArrowRounded = props =>
	(
        <div className="next-arrow-rounded border" onClick={props.onClick}>
            <img src="/assets/icons/next-arrow.png" alt="" className="img-fluid arrow-img" />
        </div>
    )

const NextArrowCalendar = props =>
    (
        <div className="next-arrow-calendar" onClick={props.onClick}>
            <img src="/assets/icons/next-arrow-calendar.png" alt="" className="img-fluid" />
        </div>
    )

const NextArrowPromotion = props =>
    (
        <div className="next-arrow-promotions" onClick={props.onClick}>
            <img src="/assets/icons/next-arrow.png" alt="" className="img-fluid arrow-img" />
        </div>
    )

export { NextArrow, NextArrowRounded, NextArrowCalendar, NextArrowPromotion }