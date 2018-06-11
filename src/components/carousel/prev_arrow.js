import React, { Component } from 'react'
import style from './style.css' 

const PrevArrow = props =>
	(
		<div className={`${style.prevArrow} ${style.wrap}`} onClick={props.onClick}>
            <img style={{width: 30}} src="/assets/icons/icons8-chevron-left-48.png" alt="" />
        </div>
	)

const PrevArrowRounded = props =>
	(
        <div className="prev-arrow-rounded border" onClick={props.onClick}>
            <img src="/assets/icons/prev-arrow.png" alt="" className="img-fluid arrow-img" />
        </div>
    )

export { PrevArrow, PrevArrowRounded }