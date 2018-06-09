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
        },{
            'path': '/search',
            'component': 'Search'
        }, {
            'path': '/company/:id',
            'component': 'Company'
        }, {
            'path': '/category/:type/:id',
            'component': 'Category'
        }, {
            'path': '/product/:id',
            'component': 'Product'
        }, {
            'path': '/cart',
            'component': 'Cart'
        }, {
            'path': '/registration',
            'component': 'Registration'
        },  {
            'path': '/profile',
            'component': 'Profile'
        }, {
            'path': '/profile/*',
            'component': 'Profile'
        }, {
            'path': '/vouchers',
            'component': 'Profile'
        }, {
            'path': '/credits',
            'component': 'Profile'
        }, {
            'path': '/purchased',
            'component': 'Profile'
        }, {
            'path': '/purchased/:id',
            'component': 'Profile'
        }, {
            'path': '/schedules',
            'component': 'Profile'
        }, {
            'path': '/notifications',
            'component': 'Profile'
        }, {
            'path': '/feedback',
            'component': 'Profile'
        }, {
            'path': '/wishlist',
            'component': 'Profile'
        }, {
            'path': '/support',
            'component': 'Profile'
        }, {
            'path': '*',
            'component': 'NotFound'
        }
    ]
}