(function ($) {
    $.fn.modal = function () {
        return this.forEach(el => {
            $('.close-btn', el).click(function () {
                $(el).hide();
            });
        });
    }
})(Erklib);