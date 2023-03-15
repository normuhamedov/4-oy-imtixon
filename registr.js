function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
}



const form = document.getElementById('form');
const naem = document.getElementById('naem');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cnfPassword = document.getElementById('cnfpassword');

const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function setError(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

 function setSuccessFor(input) {
    const formControl = input.parentElement; 
    console.log(formControl);
    formControl.className = 'form-control success';
 }
 function isEmail(email) {
    return validateEmail.test(email);
 }
 
form.addEventListener('submit', (e) => { 
    e.preventDefault();
    checkInputs();
}); 

function checkInputs() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cnfpasswordValue = cnfPassword.value.trim();
    const naemValue = naem.value.trim();
    if (naemValue === '') {
        setError(naem, 'Name qismi bo`lishi mumkin eman');
    }else {
        setSuccessFor(naem);
    }
    if(userNameValue === '') {
        setError(userName, 'username qism bo`sh bo`lishi mumkin emas')
    } else {
        setSuccessFor(userName);
    } 
    if(emailValue === '') {
        setError(email, 'Email qism bo`sh bo`lishi mumkin emas')
    } else if(!isEmail(emailValue)) {
        setError(email, 'Mumkin bo`lmagan belgilar ishlatildi')
    }
    else {
        setSuccessFor(email);
    }
    if(passwordValue === '') {
        setError(password, 'password qism bo`sh bo`lishi mumkin emas')
    }else {
        setSuccessFor(password)
    } 
    if (cnfpasswordValue === '') {
        setError(cnfPassword, 'password confirm qism bo`sh bo`lishi mumkin emas')
    }  else if(passwordValue !== cnfpasswordValue) {
        setError(cnfPassword, 'Parol mos kelmadi')
    } else {
        setSuccessFor(cnfPassword)
    } 
}