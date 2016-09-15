$(document).ready(function () {

    $('.slider-about-us').bxSlider({
        slideWidth: 220,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 10,
        pager: false,
        infiniteLoop: false
    });

    $('.offer-for-you').bxSlider({
        slideWidth: 380,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        pager: false,
        infiniteLoop: false
    });

    $(".radio-custom-color-input").change(function() {
        $('.selected-color').empty();
        var productCategory = $('.product-section').attr("id").split('-')[0];
        var productModel = $('.product-section').attr("id").split('-')[1];
        var colorName = $('.radio-custom-color-input:checked').val();

        var colorNameId = $('.radio-custom-color-input:checked').attr("id");

        $('.selected-color').append(colorName);

        var newSrc = './img/products-img/' + productCategory + '/' + productModel + '/' + productModel + '_' + colorNameId + '.png';
        var newSrc_b = './img/products-img/' + productCategory + '/' + productModel + '/' + productModel + '_' + colorNameId + '_b.png';
        $($('.product-section .tab-pane .wrap-img img')[0]).attr("src", newSrc);
        $($('.product-section .tab-pane .wrap-img img')[1]).attr("src", newSrc_b);
        $($('.nav-tabs a img')[0]).attr("src", newSrc);
        $($('.nav-tabs a img')[1]).attr("src", newSrc_b);
    });

    /******menu-double-click********/

    $('.menu-home-products').click(function(event) {
        $('.menu-home-products[aria-expanded="true"]').addClass("disabled");
    });

    /****************************valid and open block card02.html**********************/
    /*****block02*****/

    $('input[name="address-client"]').change(function() {
        if ( $('#address-available').prop("checked") ) {
            $('a[aria-controls="collapseThree"]').attr('data-toggle', 'collapse');
            $('#headingThree').addClass('open');
            $("#collapseThree").collapse('show');
        }
        else {

        }
    });

    $('#inputs-payment-information input').keyup(function() {
        var numberInput = $('#inputs-payment-information').find('input').length;
        var numberValid = 0;

        $('#address-new').prop('checked', true);
        $(this).addClass("valid");
        console.log("change input");

        $('#inputs-payment-information').find('input').each(function(){
            if ( $(this).hasClass('valid')) {
                numberValid = numberValid +1;
            }
            else {

            }
        });

        if ( numberInput == numberValid ) {
            $('a[aria-controls="collapseThree"]').attr('data-toggle', 'collapse');
            $('#headingThree').addClass('open');
            $("#collapseThree").collapse('show');
        }
        else {

        }
    });

    /*****block03*****/

    $('input[name="delivery-address-client"]').change(function() {
        if ( $('#delivery-address-available').prop("checked") ) {
            $('a[aria-controls="collapseFour"]').attr('data-toggle', 'collapse');
            $('#headingFour').addClass('open');
            $("#collapseFour").collapse('show');
        }
        else {

        }
    });


    $('#inputs-delivery-information input').keyup(function() {
        var numberInput = $('#inputs-delivery-information').find('input').length;
        var numberValid = 0;

        $('#delivery-address-new').prop('checked', true);
        $(this).addClass("valid");

        $('#inputs-delivery-information').find('input').each(function(){
            if ( $(this).hasClass('valid')) {
                numberValid = numberValid +1;
            }
            else {

            }
        });

        if ( numberInput == numberValid ) {
            $('a[aria-controls="collapseFour"]').attr('data-toggle', 'collapse');
            $('#headingFour').addClass('open');
            $("#collapseFour").collapse('show');
        }
        else {

        }
    });

    /*****block04*****/

    $('#collapseFour input[name="payment-method"]').change(function() {
        $('a[aria-controls="collapseFive"]').attr('data-toggle', 'collapse');
        $('#headingFive').addClass('open');
        $("#collapseFive").collapse('show');
    });

    /************valid and open block card03*****/

    /*****block02*****/

    $('#collapseTwo input').keyup(function() {
        var numberInput = $('#collapseTwo').find('input').length;
        var numberValid = 0;

        $(this).addClass("valid");

        $('#collapseTwo').find('input').each(function(){
            if ( $(this).hasClass('valid')) {
                numberValid = numberValid +1;
            }
            else {
            }
        });

        if ( numberInput == numberValid ) {
            $('a[aria-controls="collapseThree"]').attr('data-toggle', 'collapse');
            $('#headingThree').addClass('open');
            $("#collapseThree").collapse('show');
        }
        else {

        }
    });

    /*****block03*****/
//    same like block03 in card02.html

    /*****block04*****/
//    same like block04 in card02.html

    /************END valid and open block card03*****/


    /*****validate_product_page_form*********/


    $('.product-section form input').change(function() {

        var numberInput = $('.product-section form').find('input:radio:checked').length;
        var numberGroupRadio = $('.product-section form').find('*[group-radio-inputs]').length;

        console.log(numberInput);
        console.log(numberGroupRadio);
        if (numberInput >= numberGroupRadio) {
            $('.buy-btn').removeAttr('disabled');
        }
        else {

        }
    });

});