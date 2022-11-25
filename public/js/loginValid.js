//login declaration
const loginEmail = document.getElementById("loginEmail");
const loginPass = document.getElementById("loginPass");
const loginButton = document.getElementById("loginBtn");


const showError = (id, error) => {
    const parent = id.parentElement;
    const element = parent.querySelector(".loginError");
    element.innerHTML = error;
};

const loginClearError = () => {
    const loginErrors = document.getElementsByClassName("loginError");
    for (const error of loginErrors) {
        error.innerHTML = "";

    }
};


loginButton.addEventListener("click", (e) => {
    loginClearError();
    console.log("jkvbhj");
    if (loginEmail.value.trim() === "") {
        showError(loginEmail, "*please enter your Email");
        e.preventDefault();

    }
    else if (loginPass.value.trim() === "") {
        showError(loginPass, "*please enter your password");
        e.preventDefault();
    }
    else if (loginPass.value.length <= 5) {
        showError(loginPass, "*Password must be 6 char");
        e.preventDefault();
    }
});

