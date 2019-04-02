
/* Contact Page 



var firstName, email, phoneNumber, submit;
var $nameError = $('.errorName');
var $emailError = $('.errorEmail');
var $phoneError = $('.errorPhone');
$nameError.hide();
$emailError.hide();
$phoneError.hide();


inputChecker = function() {
    firstName = document.getElementById('name').value;
    
    email = document.getElementById('email').value;

    phoneNumber = document.getElementById('phone-number').value;
    
    if(firstName.length < 1) {
        $nameError.show().delay(3000).hide();
        return false;
        
    }

    if(email.length < 1) {
        $emailError.show();
        return false;
    }

    if(phoneNumber.length < 1) {
        $phoneError.show();
        return false;
    }
    return false;
};

document.getElementById('submit').addEventListener('click', inputChecker);


*/




$('.bioLink').on('mouseenter', function() {
    $('.bioText').css("opacity", "0.5");
});

$('.bioLink').on('mouseleave', function() {
    $('.bioText').css("opacity", "1");
});

$('.resLink').on('mouseenter', function() {
    $('.resText').css("opacity", "0.5");
});

$('.resLink').on('mouseleave', function() {
    $('.resText').css("opacity", "1");
});

$('.galLink').on('mouseenter', function() {
    $('.galText').css("opacity", "0.5");
});

$('.galLink').on('mouseleave', function() {
    $('.galText').css("opacity", "1");
});
$('.contLink').on('mouseenter', function() {
    $('.contText').css("opacity", "0.5");
});

$('.contLink').on('mouseleave', function() {
    $('.contText').css("opacity", "1");
});