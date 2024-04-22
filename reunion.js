/*Validate Form*/
function validateForm() {
    var FirstName = document.getElementById('First name').value;
    var LastName = document.getElementById('Last name').value;
    var Email = document.getElementById('Email').value;
    var Message = document.getElementById('Message').value;

    if(FirstName.trim()=== '') {
        alert("Enter your First name here");
        return false;
    }
    if(LastName.trim()=== '') {
        alert("Enter your Last name here");
        return false;
    }
    if(Email.trim()=== '') {
        alert("Enter your email here");
        return false;
    }
    if(Message.trim()=== '') {
        alert("Enter your Message here");
        return false;
    }

    alert("The form has been submitted and we'll get back to you soon!");
    return true;
}

function isValidEmail(Email) {
    var emailRight= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRight.test(Email);
}