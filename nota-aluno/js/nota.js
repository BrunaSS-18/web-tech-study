//Variaveis

const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

function resultadoNotaClick(event){
    event.preventDefault()
    const inputNotaValue = inputNota.value;
    console.log(inputNota.value)

    //Validação
    if (inputNotaValue == ""){
        alert("O campo está vázio")

        return false
    }

    //Lógica
    if (inputNotaValue >= 6) {
        alert("Você está aprovado");
    } 
    else {
        alert("Você está reprovado");
    }
}