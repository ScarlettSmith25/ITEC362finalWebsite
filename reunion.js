function validateForm() {
    var FirstName = document.getElementById('fname').value;
    var LastName = document.getElementById('lname').value;
    var Email = document.getElementById('email').value;
    var Message = document.getElementById('message').value;

    if(FirstName.trim() === '') {
        alert("Enter your First name here");
        return false;
    }
    if(LastName.trim() === '') {
        alert("Enter your Last name here");
        return false;
    }
    if(Email.trim() === '') {
        alert("Enter your email here");
        return false;
    }
    if(!isValidEmail(Email)) {
        alert("Enter a valid email address");
        return false;
    }
    if(Message.trim() === '') {
        alert("Enter your Message here");
        return false;
    }

    alert("The form has been submitted and we'll get back to you soon!");
    return true;
}

function isValidEmail(Email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(Email);
}
