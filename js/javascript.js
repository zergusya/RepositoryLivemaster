$(document).ready(function () {


    $("#block").sortable({
        placeholder: 'pop'
    });
    $("#block").disableSelection();
});


$('.down').click(function () {
    var $elements = $('.number');
    var $target = $('.block ul');

    var sort = $elements.sort(function (a, b) {
        var an = $(a).text(),
            bn = $(b).text();

        if (an && bn) {
            return bn.toUpperCase().localeCompare(an.toUpperCase());
        }

        return 0;
    });
    console.log(sort);
    $target.html('');
    $target.append(sort);
    $elements
});

$('.up').click(function () {
    var $elements = $('.number');
    var $target = $('.block ul');

    var sort = $elements.sort(function (a, b) {
        var an = $(a).text(),
            bn = $(b).text();

        if (an && bn) {
            return an.toUpperCase().localeCompare(bn.toUpperCase());
        }
        return 0;
    });
    console.log(sort);
    $target.html('');
    $target.append(sort);    
});


$(document).on('click', '.number', function () {
    $(this).toggleClass('selected');
    var items = $('.selected');

    if (items.length > 0) {
        $('.test1 input').attr('disabled', false);
    } else {
        $('.test1 input').attr('disabled', true);
    }
});

$('#button').click(function () {
    var items = $('.selected');
    items.remove();
});


$('.max').click(function () {
    $('ul').addClass('block2');
});
$('.min').click(function () {
    $('ul').removeClass('block2');
});


/*$('.down').click(function () {
    items = $('.block1 .number');
    arItems = $.makeArray(items);
    arItems.sort(function (a, b) {
        return $(a).data("sort") - $(b).data("sort")
    });
    $(arItems).appendTo(".block1");
});

$('.up').click(function () {
    items = $('.block1 .number');
    arItems = $.makeArray(items);
    arItems.sort(function (b, a) {
        return $(a).data("sort") - $(b).data("sort")
    });
    $(arItems).appendTo(".block1");
});*/
