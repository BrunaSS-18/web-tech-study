//Variaveis

const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");
const inputNome = document.getElementById("nome");

function resultadoNotaClick(event){
    event.preventDefault()
    const inputNotaValue = inputNota.value;
    const inputNome = inputNome.value;

    //Validação
    if (inputNotaValue == ""){
        //alert("O campo está vázio")
        message.style.display = "block";
        return false
    }

    //Lógica
    if (inputNotaValue >= 6) {
        //alert("Você está aprovado");
        resultado.innerHTML = `O aluno ${inputNome} aprovado`
    } 
    else {
        //alert("Você está reprovado");
        resultado.innerHTML = "Reprovado"
    }

    inputNota.value = ""
}