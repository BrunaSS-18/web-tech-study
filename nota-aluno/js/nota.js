//Variaveis

const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message")

function resultadoNotaClick(event){
    event.preventDefault()
    const inputNotaValue = inputNota.value;
    console.log(inputNota.value)

    //Validação
    if (inputNotaValue == ""){
        //alert("O campo está vázio")
        message.style.display = "block";
        return false
    }

    //Lógica
    if (inputNotaValue >= 6) {
        //alert("Você está aprovado");
        resultado.innerHTML = "Aprovado"
    } 
    else {
        //alert("Você está reprovado");
        resultado.innerHTML = "Reprovado"
    }

    inputNota.value = ""
}