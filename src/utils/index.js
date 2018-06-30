import { toggleSideMenu } from 'actions/design'
import store from 'store'

var xDown = null;                                                        
var yDown = null;

export const getParams = hash => {
        let params = {
            type: []
        }
        hash.split('&').forEach(item => { 
            const [key, value] = item.split('=')
            key === 'type' ? params[key] = (value === 'alls' ? ['products', 'services'] : [value]) : params[key] = decodeURIComponent(value)
        })
        return params
    }

export const getSearchText = hash =>
	hash.replace('#', '').split('&').map(item => {
		const [key, value] = item.split('=')
		return key === 'search_text' ? value : ''
	})

export const removeSwipe = el => {
    el.removeEventListener('touchstart', initSwipe)
    el.removeEventListener('touchmove', handleSwipe)
}

export const addSwipe = el => {
    el.addEventListener('touchstart', initSwipe)
    el.addEventListener('touchmove', handleSwipe)
}

const initSwipe = e => {
    xDown = e.touches[0].clientX
    yDown = e.touches[0].clientY
}

const handleSwipe = e => {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = e.touches[0].clientX;                                    
    var yUp = e.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
        } else {
            store.dispatch(toggleSideMenu(false))
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;
}