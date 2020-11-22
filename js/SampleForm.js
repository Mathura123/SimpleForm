const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let namRegex = new RegExp(/^[A-Z][a-z]{2,}$/);
    if (namRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Name is incorrect";
})
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = new RegExp(
        /^[a-zA-z0-9]+([-.+_][a-zA-Z0-9]+)*[@][a-zA-z0-9]+([.][a-zA-z]{2,}){1,2}$/);
    if (emailRegex.test(email.value))
        emailError.textContent = "";
    else
        emailError.textContent = "Email is incorrect";
})
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function () {
    let telRegex = new RegExp(/^[0-9]+[ ][1-9][0-9]{9}$/);
    if (telRegex.test(tel.value))
        telError.textContent = "";
    else
        telError.textContent = "Incorrect Mobile No.";
})
const pass = document.querySelector('#pwd');
const passError = document.querySelector('.pass-error');
pass.addEventListener('input', function () {
    let passRegex = new RegExp(
        /^.*(?=.{8,}$)(?=.*[A-Z])(?=.*[0-9])(?=^[A-Za-z0-9]*[^a-zA-Z0-9][A-Za-z0-9]*$)/);
    if (passRegex.test(pass.value))
        passError.textContent = "";
    else
        passError.textContent = "Password is incorrect";
})
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
})