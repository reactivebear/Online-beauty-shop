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
            'path': '/product/:id',
            'component': 'Product'
        }, {
            'path': '/',
            'component': 'Main'
        }, {
            'path': '*',
            'component': 'NotFound'
        }
    ]
}