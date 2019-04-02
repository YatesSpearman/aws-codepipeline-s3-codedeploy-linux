/* Contact Page 
 ORIGINAL CONTACT VALIDATION LOGIC


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


/* IMPROVED jquery.validate logic */

$('.contact-form').validate();