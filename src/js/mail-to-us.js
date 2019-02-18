export default function ($) {
    const mailToUsBtns = $('[data-call="mail-to-us"]');
    const mailToUs = $('.mail-to-us');
    const close = mailToUs.find('.close-btn');

    close.bind('click', function () {
        mailToUs.removeClass('visible');
    });

    mailToUsBtns.each(function () {
        const button = $(this);

        button.bind('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            mailToUs.addClass('visible');
        });
    });
}