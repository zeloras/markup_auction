let mainMenu = {
    config: {
        'mobileMenu': 'header-mobile',
        'menu': 'header__mobile',
        'mobileClose': 'header-mobile-close'
    },

    init: function () {
        let self = this;
        let config = self.config;

        $('.' + config.mobileMenu + ', .' + config.mobileClose).on('click', function () {
            $('.' + config.menu).toggleClass('active');
        });
    }
};

mainMenu.init();
