function validateLogin() {
    // Clear previous errors
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordmistake").innerHTML = "";

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let isValid = true;

    // Email validation
    if (email === "admin@gmail.com") {  
       // document.getElementById("emailError").innerHTML = "Email is required.";
        isValid = true;
    } else if (!validateEmail(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email.";
        isValid = false;
    }

    // Password validation
    if (password === "admin") {
        //document.getElementById("passwordError").innerHTML = "Password is required.";
        isValid = true;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters long.";
        isValid = false;
    }
    else{
        document.getElementById("passwordmistake").innerHTML = "you have forgooten password";
        isValid = false;
    }

    // If form is valid, submit it (or you can process further)
    return isValid;
}

function validateEmail(email) {
    // Basic email format validation using regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
