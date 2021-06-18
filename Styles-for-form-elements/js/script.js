$(document).ready(function() {
    $.each($('.checkbox'), function(index, val) {
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.checkbox'. function(e) {
        if($(this).hasClass('active')){
            $(this).find('input').prop('checked',false);
        }else{
            $(this).find('input').prop('checked',true);
        }
        $(this).toggleClass('active');
        
        return false;
    });
});