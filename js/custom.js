$(document).ready(function () {

    // ===============================================================================
    //      Tabify
    // ===============================================================================
    // On load show active tab and hide the rest

    var hash = window.location.hash;
    if (!hash) hash = '#home';

    $("a[href='" + hash + "']").addClass('active');
    $('.content').hide();
    $(hash).show();
    $('#wrapper').show();

    // Click function
    $('.tab-container .top-menu a').click(function () {
        $('.tab-container .top-menu a').removeClass('active');
        $(this).addClass('active');
        $('.content').hide();
        var href = $(this).attr('href');
        $(href).fadeIn();
        history.pushState({}, null, href);
        return false;
    });

    // ===============================================================================
    //      PORTFOILO
    // ===============================================================================

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }

        $(".filter-button").removeClass("active");
        $(this).addClass("active");
    });

    

    // ===============================================================================
    //      PORTFOILO POPUP
    // ===============================================================================
    $('.popup_plus').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'gallery_product_popup',
        image: {
            verticalFit: true
        }
    });

    // ===============================================================================
    //      Contact From Submit
    // ===============================================================================
    // $('#con_submit').click(function () {
    //     var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    //     var validation = true;
    //     if($.trim($('#con_name').val()) == ""){

    //         validation = false;
    //         $("#con_name_error").show();
    //     }else{
    //         $("#con_name_error").hide();
    //     }

    //     if($.trim($('#con_email').val()) == ""){

    //         validation = false;
    //         $("#con_blank_email_error").show();
    //     }else{
    //         $("#con_blank_email_error").hide();

    //         if(!emailRegex.test($.trim($('#con_email').val()))){

    //             validation = false;
    //             $("#con_email_error").show();
    //         }else{
    //             $("#con_email_error").hide();
    //         }
    //     }

    //     if($.trim($('#con_message').val()) == ""){

    //         validation = false;
    //         $("#con_message_error").show();
    //     }else{
    //         $("#con_message_error").hide();
    //     }

    //     if(validation) {
    //          $.post('/mail.php', {
    //             to: $('#con_email').val(), 
    //             message: $('#con_message').val()
    //         }, function(response){ 
    //             $('#con_name').val("");
    //             $('#con_email').val("");
    //             $('#con_message').val("");
    //             $("#success_msg").text(response.message);

    //             setTimeout(function(){
    //                 $("#success_msg").text();
    //             }, 5000);
    //         }, "json");            
    //     }
        
    // });
    var submitted=false;
    $('#gform').on('submit', function(e) {
        $('#gform *').fadeOut(2000);
        $('#gform').prepend('Your submission has been processed...');
    });
    
});


// ===============================================================================
//      RESPONSIVE
// ===============================================================================
$(document).ready(function () {
    $('.responsive-menu').click(function () {
        $('.top-menu').toggleClass('active-media');
    });
});