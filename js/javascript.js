       $(document).ready(function(){


$("#block").sortable();
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




$('#p1').click(function(){
    $('#p1').css("backgroundColor", "brown");
    $('#button').replaceWith('<div><input type="button"value="Удалить" id="button"></div>')

});

$('#p2').click(function(){
    $('#p2').css("backgroundColor", "brown");
    $('#button').replaceWith('<div><input type="button"value="Удалить" id="button"></div>')
});
$('#p3').click(function(){
    $('#p3').css("backgroundColor", "brown");
    $('#button').replaceWith('<div><input type="button"value="Удалить" id="button"></div>')
});
$('#p4').click(function(){
    $('#p4').css("backgroundColor", "brown");
    $('#button').replaceWith('<div><input type="button"value="Удалить" id="button"></div>')
});
$('#p5').click(function(){
    $('#p5').css("backgroundColor", "brown");
    $('#button').replaceWith('<div><input type="button"value="Удалить" id="button"></div>')
});
$('#p6').click(function(){
    $('#p6').css("backgroundColor", "brown");
    $('#button').replaceWith('<div><input type="button"value="Удалить" id="button"></div>')
});
$('#p7').click(function(){
    $('#p7').css("backgroundColor", "brown");
    $('#button').replaceWith('<div><input type="button"value="Удалить" id="button"></div>')
});
$('#p8').click(function(){
    
    $('#button').replaceWith('<div><input type="button"value="Удалить" id="button"></div>')
    $(this).addClass('selected');
});

$('.resize').click(function(){
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
});
$('#button').click(function(){
    $('.selected').detach();
});