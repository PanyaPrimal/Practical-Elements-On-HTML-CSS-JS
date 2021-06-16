$(document).ready(function() {
    $.each($('.checkbox'), function(index, val) {
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
    });
});