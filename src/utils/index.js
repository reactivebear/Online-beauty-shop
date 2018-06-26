export const getParams = hash => {
        let params = {
            type: []
        }
        hash.split('&').forEach(item => { 
            const [key, value] = item.split('=')
            key === 'type' ? params[key] = (value === 'all' ? ['products', 'services'] : [value]) : params[key] = decodeURIComponent(value)
        })
        return params
    }