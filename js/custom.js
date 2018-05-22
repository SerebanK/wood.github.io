$(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1200,
            settings: {slidesToShow: 2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000}
        }, {
            breakpoint: 992,
            settings: {slidesToShow: 2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000}
        }, {breakpoint: 768, settings: {slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000}}]
    });
    $('.slider-part').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1200,
            settings: {slidesToShow: 4, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000}
        }, {
            breakpoint: 991,
            settings: {slidesToShow: 3, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000}
        }, {
            breakpoint: 767,
            settings: {slidesToShow: 2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000}
        }, {breakpoint: 424, settings: {slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000}}]
    });
    $('input[name="phone"]').mask("+38 (099) 999 99 99");
    $('.call-bt').click(function () {
        var parentClass = $(this).attr('rel');
        validate = 1;
        validate_msg = '';
        form = $('#' + $(this).attr('data-rel'));
        jQuery.each(form.find('.validate input'), function (key, value) {
            if ($(this).val() == '') {
                validate_msg += $(this).attr('title') + '\n';
                validate = 0;
                $(this).focus();
                $(this).parent("label").find('input').addClass('red_input');
                $(this).keyup(function () {
                    $(this).parent("label").find('input').removeClass('red_input');
                });
            } else {
                $(this).parent("label").find('input').removeClass('red_input');
            }
        });
        if (validate == 1) {
            $.ajax({
                url: 'ajax.php', data: 'action=send_form&' + form.serialize(), success: function (data) {
                    $('form').trigger('reset');
                    $('#popap').modal('show');
                }
            });
        } else {
        }
    });
});