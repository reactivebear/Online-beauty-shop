export const API_URL = 'http://visualtotal.com.br' 
export const APIKEY = 'apikey'
export const LIST_MENU = [
            {
                title: 'Minha Conta',
                icon: 'user-icon-grey',
                url: 'profile'
            }, {
                title: 'Lista de desejos',
                icon: 'vaucher-icon-grey',
                url: 'wishlist'
            }, {
                title: 'Vouchers',
                icon: 'user-icon-grey',
                url: 'vouchers'
            }, {
                title: 'Créditos',
                icon: 'credits-icon-grey',
                url: 'credits'
            }, {
                title: 'Agendamentos',
                icon: 'book-icon-grey',
                url: 'schedules'
            }, {
                title: 'Produtos comprados',
                icon: 'product-icon-grey',
                url: 'purchased'
            }, {
                title: 'Notificações',
                icon: 'bell-icon-grey',
                url: 'notifications'
            }, {
                title: 'Refeição e feedback',
                icon: 'doc-icon-grey',
                url: 'feedback'
            }, {
                title: 'Suporte',
                icon: 'support-icon-grey',
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