let form = document.querySelector("form");
let button = document.querySelector("button");
let mail = document.getElementsByName("mail")[0];
let message = document.querySelector(".invalid");
const validationFailed = (e) => {
    e.preventDefault();
    message.style.display = "block";
}, validate = () => {
    let valid = form.checkValidity();
    if (valid) message.style.display = "none";
    return valid;
}, submitHandler = (e) => {
    e.preventDefault();
    console.log(`Submited on ${mail.value}`);
    mail.value = "";
}, clickHandler = (e) => {
        e.preventDefault();
    if (validate())
        form.submit();
};
mail.addEventListener("invalid", validationFailed);
mail.addEventListener("blur", validate);
button.addEventListener("keypress", clickHandler);
form.addEventListener("submit", submitHandler);
