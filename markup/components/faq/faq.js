let FAQ = {

    init: function () {
        let self = this;
        let config = self.config;

        $('.faq__item').on('click', function () {
            $(this).toggleClass('active');
        });
    }
};

FAQ.init();
