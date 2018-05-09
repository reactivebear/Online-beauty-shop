import React, { Component } from 'react';
import {ReactDom} from 'react-dom';
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';



export default class SwipeableCarousel extends Component {
    constructor (props) {
        super(props);
        this.state = { key: [], swipeableCard: [] }
    }

    render () {
        return (
            <ReactResponsiveCarousel showIndicators={false} showArrows={false} showThumbs={false} centerMode={"true"} emulateTouch={"true"} swipeScrollTolerance={8} showStatus={false}>
                <div style={{ margin: "0 10px 0 10px"}}>
                    <img src="http://images4.fanpop.com/image/photos/20600000/Megan-Fox-Wallpaper-megan-fox-20663129-1024-768.jpg" />
                    
                </div>
                <div>
                    <img src="http://images4.fanpop.com/image/photos/20600000/Megan-Fox-Wallpaper-megan-fox-20663129-1024-768.jpg" />
                    
                </div>
                <div>
                    <img src="http://images4.fanpop.com/image/photos/20600000/Megan-Fox-Wallpaper-megan-fox-20663129-1024-768.jpg" />
                    
                </div>
                <div>
                    <img src="http://images4.fanpop.com/image/photos/20600000/Megan-Fox-Wallpaper-megan-fox-20663129-1024-768.jpg" />
                    
                </div>
                <div>
                    <img src="http://images4.fanpop.com/image/photos/20600000/Megan-Fox-Wallpaper-megan-fox-20663129-1024-768.jpg" />
                    
                </div>
                <div>
                    <img src="http://images4.fanpop.com/image/photos/20600000/Megan-Fox-Wallpaper-megan-fox-20663129-1024-768.jpg" />
                    
                </div>
            </ReactResponsiveCarousel>
        );
        
    }

}