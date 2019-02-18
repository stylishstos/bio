export default function items($) {
    const items = $('.items .item');

    items.each(function () {
       const item = $(this);
       const close = item.find('.icon-close');
       const description = item.find('.description');

       item.bind('click', function (e) {
           e.preventDefault();
           description.addClass('visible');
       });

       close.bind('click', function (e) {
           e.stopPropagation();

           description.removeClass('visible');
       })
    });
}