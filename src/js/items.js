export default function items($) {
    const items = $('.items');

    console.log(items);

    items.delegate('.item', 'click', function (e) {
        console.log(e);
        e.preventDefault();

        $(this).find('.description').addClass('visible');
    });
}