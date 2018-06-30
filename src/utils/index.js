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