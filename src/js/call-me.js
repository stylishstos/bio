var m = ["ага, сейчас твой телефон по ip вычислю и перезвоню", "та ты шо такой настырный, обожди штрих", "отьебись дядя, сервис еще не готов.", "хули ты тыкаешь заебал"];
var length = m.length;

export default function ($) {
    var body = $('body');

    var container = $('<div/>',{
        'class':'call-me-please'
    });

    var bg = $('<div/>',{
        'class':'call-me-please__bg'
    }).appendTo(container);

    var phone = $('<div/>', {
        'class':'call-me-please__phone'
    }).appendTo(container);

    var form = $('<div class="call-me-please__form"><div class="caret"></div><input type="text" placeholder="+7 введите номер"><button>жду звонка</button></div>');

    var input = form.find("input");

    form.find("button").bind("click", function(){
        alert(input.val());
    });

    form.appendTo(container);

    body.append(container);
}