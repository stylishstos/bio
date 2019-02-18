export default function ($) {
    const nav = $('.nav-link');

    nav.each(function () {
        const a = $(this);
        const scrollTop = $(a.attr('href')).offset().top;

        const scroll = function () {
            $('html, body').animate({ scrollTop }, 500, 'linear');
        };

        a.bind('click', scroll);
    });
}