export const API_URL = 'http://visualtotal.com.br' 
export const APIKEY = 'apikey'
export const LIST_MENU = [
            {
                title: 'Minha Conta',
                icon: 'user-icon-grey',
                icon_white: 'user-icon.png',
                url: 'profile'
            }, {
                title: 'Lista de desejos',
                icon: 'vaucher-icon-grey',
                icon_white: 'list-icon.png',
                url: 'wishlist'
            }, {
                title: 'Vouchers',
                icon: 'user-icon-grey',
                icon_white: 'vaucher-icon.png',
                url: 'vouchers'
            }, {
                title: 'Créditos',
                icon: 'credits-icon-grey',
                icon_white: 'credits-icon.png',
                url: 'credits'
            }, {
                title: 'Agendamentos',
                icon: 'book-icon-grey',
                icon_white: 'book-icon.png',
                url: 'schedules'
            }, {
                title: 'Produtos comprados',
                icon: 'product-icon-grey',
                icon_white: 'product-icon.png',
                url: 'purchased'
            }, {
                title: 'Notificações',
                icon: 'bell-icon-grey',
                icon_white: 'bell-icon.png',
                url: 'notifications'
            }, {
                title: 'Refeição e feedback',
                icon: 'doc-icon-grey',
                icon_white: 'doc-icon.png',
                url: 'feedback'
            }, {
                title: 'Suporte',
                icon: 'support-icon-grey',
                icon_white: 'support-icon.png',
                url: 'support'
            }
        ]

export const DROP_LIST = ['Mais relevantes', 'Menor preço', 'Maior preço']
export const NOTIFICATION_TYPE = {
        attention: {
            title: 'Atenção',
            icon: '/assets/icons/notify-attention.png'
        },
        reminder: {
            title: 'Lembrete',
            icon: '/assets/icons/notify-reminder.png'
        },
        review: {
            title: 'Reveja',
            icon: '/assets/icons/notify-review.png'
        },
        credits: {
            title: 'Reveja',
            icon: '/assets/icons/notify-credits.png'
        },
        products: {
            title: 'Produto',
            icon: '/assets/icons/notify-products.png'
        },
        gift: {
            title: 'Lembrete',
            icon: '/assets/icons/notify-gift.png'
        }
    }