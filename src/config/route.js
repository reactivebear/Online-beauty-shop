export default {
    'public': [
        {
            'path': '/',
            'component': 'Main'
        }, {
            'path': '/product/:id',
            'component': 'Product'
        }, {
            'path': '*',
            'component': 'NotFound'
        }
    ],
    'private': [
        {
            'path': '/',
            'component': 'Main'
        }, {
            'path': '/product/:id',
            'component': 'Product'
        }, {
            'path': '/cart',
            'component': 'Cart'
        }, {
            'path': '*',
            'component': 'NotFound'
        }
    ]
}