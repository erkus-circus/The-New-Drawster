var menuOpen;

$(window).load(function () {
    $('.modal').modal();
    $('.panel').forEach(function (el) {
        $('.close-btn', el).click(function () {
            $(el).hide();
        });
    })
    $('.nav-menu-item').click(function (e, elem) {
        var panel = $('.panel', e.target);

        if (e.target !== this) {
            return;
        }
        if (menuOpen != panel) {
            try {
                menuOpen.hide();
            } catch (e) {}
        }

        panel.toggle();

        menuOpen = panel;
    });
});