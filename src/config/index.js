export const API_URL = 'http://visualtotal.com.br' 
export const APIKEY = 'apikey'
export const LIST_MENU = [
            {
                title: 'Minha Conta',
                icon: 'user-icon-grey',
                icon_white: 'user-icon.png',
                svg_icon: 'Minha-conta-black.svg',
                svg_icon_hover: 'Minha-conta-white.svg',
                url: 'profile'
            }, {
                title: 'Lista de desejos',
                icon: 'list-icon-grey',
                icon_white: 'list-icon.png',
                svg_icon: 'Lista-de-desejos-black.svg',
                svg_icon_hover: 'Lista-de-desejos-white.svg',
                url: 'wishlist'
            }, {
                title: 'Vouchers',
                icon: 'vaucher-icon-grey',
                icon_white: 'vaucher-icon.png',
                svg_icon: 'Voucher-black.svg',
                svg_icon_hover: 'Voucher-white.svg',
                url: 'vouchers'
            }, {
                title: 'Créditos',
                icon: 'credits-icon-grey',
                icon_white: 'credits-icon.png',
                svg_icon: 'Créditos-black.svg',
                svg_icon_hover: 'Créditos-white.svg',
                url: 'credits'
            }, {
                title: 'Agendamentos',
                icon: 'book-icon-grey',
                icon_white: 'book-icon.png',
                svg_icon: 'Agendamentos-black.svg',
                svg_icon_hover: 'Agendamentos-white.svg',
                url: 'schedules'
            }, {
                title: 'Produtos comprados',
                icon: 'product-icon-grey',
                icon_white: 'product-icon.png',
                svg_icon: 'Produtos-comprados-black.svg',
                svg_icon_hover: 'Produtos-comprados-white.svg',
                url: 'purchased'
            }, {
                title: 'Notificações',
                icon: 'bell-icon-grey',
                icon_white: 'bell-icon.png',
                svg_icon: 'Notificações-black.svg',
                svg_icon_hover: 'Notificações-white.svg',
                url: 'notifications'
            }, {
                title: 'Revisão e feedback',
                icon: 'doc-icon-grey',
                icon_white: 'doc-icon.png',
                svg_icon: 'Revisão-e-feedback-black.svg',
                svg_icon_hover: 'Revisão-e-feedback-white.svg',
                url: 'feedback'
            }, {
                title: 'Suporte',
                icon: 'support-icon-grey',
                icon_white: 'support-icon.png',
                svg_icon: 'Suporte-black.svg',
                svg_icon_hover: 'Suporte-white.svg',
                url: 'support'
            }
        ]

export const DROP_LIST = ['Mais relevantes', 'Menor preço', 'Maior preço']
export const DROP_MENU_LIST = [
    {
        title: 'Produto',
        background: 'bg-green',
        type: 'product'
    }, {
        title: 'Serviço',
        background: 'bg-blue',
        type: 'service'
    }, {
        title: 'Salão',
        background: 'bg-orange',
        type: 'salon'
    }, {
        title: 'Vendedor',
        background: 'bg-brown',
        type: 'vendor'
    }
]
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

export const WEEK = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo']

export const LIGHTBOX_THEME = {
                            container: {
                                    backgroundColor: 'rgba(0,0,0,0.4)',
                                    background: 'rgba(0,0,0,0.4)'
                            },
                            arrow: {
                                fill: '#579a64',
                                borderRadius: '100%',
                                backgroundColor: '#fff',
                                maxHeight: '46px',
                                maxWidth: '46px',
                                minWidth: '46px',
                                transform: 'translateY(37px)',
                                padding: '4px 9px 4px 10px',
                                marginRight: '30px'
                            }
                        }

export const DEFAULT_IMG = {src: '/assets/images/default-image-square-big.png'}
export const MONTH = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']