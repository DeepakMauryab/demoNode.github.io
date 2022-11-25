
const user = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");
const button = document.getElementById("btn");

const showError = (id, error) => {
    const parent = id.parentElement;
    const element = parent.querySelector(".error");
    element.innerHTML = error;
};
const clearError = () => {
    const errors = document.getElementsByClassName("error");
    for (const error of errors) {
        error.innerHTML = "";

    }
};

button.addEventListener("click", (e) => {
    clearError();
    if (user.value.trim() === "") {
        showError(user, "*please enter your name");
        e.preventDefault();
    }
    else if (email.value.trim() === "") {
        showError(email, "*please enter your Email");
        e.preventDefault();

    }
    else if (!(email.value.includes('@'))) {
        showError(email, "*enter correct Email");
        e.preventDefault();

    }
    else if (user.value.length <= 3) {
        showError(user, "*entered name is too short");
        e.preventDefault();
    }
    else if (mobile.value.trim() === "") {
        showError(mobile, "*please enter your mobile number");
        e.preventDefault();
    }
    else if (mobile.value.length < 10 || mobile.value.length > 10) {
        showError(mobile, "*mobile must be 10 char");
        e.preventDefault();
    }
    else if (pass.value.trim() === "") {
        showError(pass, "*please enter your password");
        e.preventDefault();
    }
    else if (pass.value.length <= 5) {
        showError(pass, "*Password must be 6 char");
        e.preventDefault();
    }
    else if (!(cpass.value === pass.value)) {
        showError(cpass, "*confirm password doesn't match with password");
        e.preventDefault();
    }
});
