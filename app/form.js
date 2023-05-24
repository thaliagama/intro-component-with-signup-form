let form = document.querySelector('form')
let inputs = document.querySelectorAll('.inputs')
let msg = document.querySelectorAll('.span-required')
let msgOk = document.querySelector('.submited')


const emailRegex = /\S+@\S+\.\S+/

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    nameValidate()
    lastNameValidate()
    emailValidate()
    passwordValidate()
})


function msgError(index){
    inputs[index].style.outlineColor = 'red';
    msg[index].style.display = 'block';
}

function removeError(index){
    inputs[index].style.outlineColor = '';
    msg[index].style.display = "none" 
}


function nameValidate() {
    if (inputs[0].value.length < 3) {
       msgError(0)
    } else {
        removeError(0)
    }
}

function lastNameValidate() {
    if (inputs[1].value.length < 3) {
       msgError(1)
    } else {
        removeError(1)
    }
}

function emailValidate() {
    if (!emailRegex.test(inputs[2].value)) {
       msgError(2)
    } else {
       removeError(2)
    }
}

function passwordValidate() {
    if (inputs[3].value.length < 8) {
       msgError(3)
    } else {
       removeError(3)
    }
}