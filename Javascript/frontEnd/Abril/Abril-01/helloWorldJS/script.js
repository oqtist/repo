let nomeUsuario, sobrenome, nomeCompleto //variaveis saudar
let precoGrama, peso, valor //variaveis ouro
function saudar(){
    nomeUsuario = prompt("Qual o seu nome?")
    sobrenome = prompt("E seu sobrenome?")
    nomeCompleto = nomeUsuario + ' ' + sobrenome
    alert("Saudações, " + nomeCompleto + "!")
}

function calcularIdade(){
    let idade, idadeAnoQueVem
    idade = Number(prompt("Qual a sua idade?"))
    idadeAnoQueVem = idade + 1
    console.log(idadeAnoQueVem);
    alert("A sua idade no ano que vem será " + idadeAnoQueVem)
}

function valorOuro(){
    precoGrama = 368.95
    peso = Number(prompt("Quantos gramas de ouro você tem?"))
    valor = precoGrama * peso
    alert("Você tem R$" + valor.toFixed(2) + " em ouro.")
}