const form = document.querySelector("#form")
const nameImput = document.querySelector("#name")
const emailImput = document.querySelector("#email")
const passwordImput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameImput.value === ""){
        alert("por favor, preencha o seu nome");
        return;
    }
    if(emailImput.value === ""){
        alert("por favor, preencha o seu email");
        return;
    }
    if(passwordImput.value === ""){
        alert("por favor, preencha a sua senha");
        return;
    }
    if(jobSelect.value === ""){
        alert("por favor, preencha a situação de trabalho");
        return;
    }
    if(messageTextarea.value === ""){
        alert("por favor, preencha a mensagem");
        return;
    }
    if(!validatePassword(passwordImput.value, 8)){
        alert("a senha precisa ter no minimo 8 digitos");
        return;
    }
    form.submit();
})

function validatePassword(password, minDigits) {
    if(password.length >= minDigits){
        return true;
    }
    return false;
}