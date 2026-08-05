/*função de aparecer a imagem e o botão*/
const botao = document.querySelector("#btnRevelar")
const img = document.querySelector(".muayThai")
const formularioContainer = document.querySelector(".form")

/*formulario*/
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector ("#telefone");
const button = document.querySelector("button");
const btnCadastrar = document.querySelector(".form-button button");

botao.addEventListener("click", function() {
    botao.style.display = "none"
    img.style.display = "block"
    formularioContainer.style.display = "block"
})

/* função de se cadastrar */
button.addEventListener("click", (event) => {
    event.preventDefault();
    
    const inputValue = nome.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;
    
    nome.value ="";
    email.value ="";
    telefone.value ="";

    document.querySelector(".card").style.backgroundColor = "#b6aeafb6";

})