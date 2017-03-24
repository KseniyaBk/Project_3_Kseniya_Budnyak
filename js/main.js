/**
 * Created by Ксения on 25.02.2017.
 */
$('#reg-form').validate({
    rules: {
        name:{
            minlength: 5
        }
    }
});
$('.phone').mask("(999) 999-9999");


$('#popup-open').click(function(){
    $('.popup-wrap').show('slow')
});
