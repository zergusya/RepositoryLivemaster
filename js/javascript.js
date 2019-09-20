       $(document).ready(function(){


$("#block").sortable({
placeholder:'pop'
});
$("#block").disableSelection();
});


$('.down').click(function(){
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

$('.up').click(function(){
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



$('.number').click(function(){
    $(this).toggleClass('selected');
    var items = $('.selected');

    if (items.length > 0) {
        $('.test1 input').attr('disabled', false);
    } else {
        $('.test1 input').attr('disabled', true);
    }
});

$('#button').click(function(){
    var items = $('.selected');
    items.remove();
});


$('.max').click(function(){
    $('li').removeClass('number1')
    $('li').addClass('number2',)
});
$('.min').click(function(){
    $('li').removeClass('number2')
    $('li').addClass('number1')
});




