function checkAge() {
    const ageInput = document.getElementById("age-input").value;
    const age = Number(ageInput);

    let errorMessage = "";

    if (isNaN(age)) {
        errorMessage = "User did not enter a number.";
        document.getElementById("error-message").innerHTML = errorMessage;
    }
    else if (age % 1 != 0) {
        errorMessage = "User did not enter a whole number.";
        document.getElementById("error-message").innerHTML = errorMessage;
    }
    else if (age < 0) {
        errorMessage = "User did not enter a positive number.";
        document.getElementById("error-message").innerHTML = errorMessage;
    }
    else if (age < 18) {
        errorMessage = "User is too young.";
        document.getElementById("error-message").innerHTML = errorMessage;
    }
    else if (age > 120) {
        errorMessage = "User is too old.";
        document.getElementById("error-message").innerHTML = errorMessage;
    }
    else {
    }
    console.log(errorMessage);

    if (errorMessage === "") {
        document.getElementById("main-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";
        console.log("showing content");
    }
    else {
        document.getElementById("error-message").style.visibility = "errorMessage";
        document.getElementById("main-content").style.visibility = "hidden";
        document.getElementById("error-content").style.visibility = "visible";
        console.log("showing error");


    }

}
