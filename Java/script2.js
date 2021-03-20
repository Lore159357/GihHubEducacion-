
alert("Recuerda que puedes sombrear la linea que quieras o te parezca interesante");

$('li').click(function(){
    $(this).addClass('resaltar_1');
    });
        
$('li').dblclick(function(){
    $(this).addClass('resaltar_2');
    });