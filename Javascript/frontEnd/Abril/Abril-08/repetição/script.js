<<<<<<< HEAD
   let resultado = document.getElementById('resultado')
=======

    let exercicio1 = document.getElementById('exercicio1')
    console.log(resultado);
>>>>>>> 21a2b90cde97f7d1a691aad9d1bec1bf8c3004e7

    let resultado = document.getElementById('resultado')

    // // let nome = prompt("Digite seu nome: ")
    // // resultado.innerHTML = "Olá, " + nome

    // let cont = 0
    // while(cont<10) {
    //     resultado.innerHTML += (`${cont}<br>`)
    //     cont++
    // }

    // while(cont>0) {
    //     resultado.innerHTML += (`${cont}<br>`)
    //     cont--
    // }

<<<<<<< HEAD
=======
    // //10-1 (decrescente)
    // let cont = 10
    // while (cont > 0) {
    //     resultado.innerHTML += (`${cont}<br>`)
    //     cont--
    // }

>>>>>>> 21a2b90cde97f7d1a691aad9d1bec1bf8c3004e7
    //Soma 1-100
    let cont = 0
    let soma = 0
    while (cont <= 100) {
        cont++
        soma += cont
        resultado.innerHTML = (`Soma dos números de 1 a 100:<br>${soma}`)
    }

    // //Tabuda de 5 (1-10)
    // let cont = 0
    // while (cont < 11) {
    //     resultado.innerHTML += (`5 x ${cont} = ${cont * 5}<br>`)
    //     cont++
    // }

    // //Tabuda de x (1-10)
    // let cont = 0
    // let num = Number(prompt('Digite o número para a tabuada.'))
    // while (cont < 11) {
    //     resultado.innerHTML += (`${num} x ${cont} = ${cont * num}<br>`)
    //     cont++
    // }

    // //Números ímpares de 1-20
    // let cont = 0
    // while (cont <= 20) {
    //     if(cont % 2 != 0) {
    //         resultado.innerHTML += (`${cont}<br>`)
    //     }
    //     cont++
    // }

    // //1-10 / 10 -1
    // let cont = 0
    // while(cont<10) {
    //     resultado.innerHTML += (`${cont}<br>`)
    //     cont++
    // }

    // while(cont>0) {
    //     resultado.innerHTML += (`${cont}<br>`)
    //     cont--
    // }

    // //fatorial de um número
    // let cont = 1
    // let num = Number(prompt('Digite o número a ser fatoriado:'))
    // let fatorial
    // while(cont < num) {
    //     cont*=
    //     cont++
    // }
    // resultado.innerHTML = (`O fatorial do número é ${cont}`)

    // //maior-menor (lista)
    // let quantia = Number(prompt('Digite a quantia de números a serem inseridos na lista: '))
    // let num = Number
    // let cont = 0
    // let maior = Number
    // let menor = Number

    // while (cont <= (quantia)) {
    //     num = Number(prompt(`Digite um número: `))
    //     if(cont == 0) {
    //         menor = num
    //         maior = num
    //         cont++
    //     } else if (num < menor) {
    //         menor = num
    //     }
    //     if (num > maior) {
    //         maior = num
    //     }
    //     cont++
    // }

    // resultado.innerHTML = (`O maior número é ${maior} e o menor número é ${menor}.`)

    // //média de uma lista
    // let listaNum = Number(prompt('Quantos números estarão na lista?'))
    // let cont = 0
    // let num
    // let soma = 0
    // let media = 0
    
    // while (cont < listaNum) {
    //     num = Number(prompt('Escreva um número:'))
    //     soma += num
    //     cont++
    // }

    // media = (soma / listaNum)
    // resultado.innerHTML = (`A média dos números resulta em ${media}.`)

    // //verificação de número primo
    // let cont = 0
    // let primo, primo2, primoBool = true
    // primo = Number(prompt('Digite um número para verificar se ele é primo:'))
    // while (cont < primo) {
    //     primo2 = primo
    //     while (primo2 > 0) {
    //         primo2--
    //         if(primo % primo2 == 0 && primo2 > 1) {
    //             primoBool = false
    //         }
    //     }
    //     if (primo2 == 0 && primoBool == false) {
    //         resultado.innerHTML = (`O número ${primo} não é primo.`)
    //     } else if (primo2 == 0 && primoBool == true) {
    //         resultado.innerHTML = (`O número ${primo} é primo.`)
    //     }
    //     cont++
    // }

    
    // //'aclamação repetida'
    // let palavra = prompt('Digite uma palavra:'), cont = 0
    // while (cont < 10) {
    //     resultado.innerHTML += (`${palavra}<br>`)
    //     cont++
    // }

    // //'somando números pares'
    // let numUsuario = Number(prompt('Digite um número:'))
    // let cont = numUsuario, soma = 0, numDisplay = numUsuario
    // while(cont > 0) {
    //     if (numUsuario % 2 == 0) {
    //         soma += numUsuario
    //     }
    //     numUsuario--
    //     cont--
    // }
    // resultado.innerHTML = (`O resultado da soma dos pares até ${numDisplay} é ${soma}`)

    // //Lista de compras
    // let cont = 1
    // while (cont == 1) {
    //     let nomeProduto = prompt('Escreva o nome do produto:')
    //     if (nomeProduto != "") {
    //         resultado.innerHTML += (`- ${nomeProduto}<br>`)
    //     } else {
    //         cont = 0
    //     }
    // }

    // //Números ímpares inversos
    // let num = Number(prompt('Digite um número.\nEm seguida, serão exibidos todos os números ímpares que existem entre o número escolhido e 1.'))
    // let cont = 0
    // let num2 = num
    // resultado.innerHTML += (`Os números ímpares entre 1 e ${num} são:<br>`)
    // num = 1

    // while (cont < num2) {
    //     if (num % 2 != 0) {
    //         resultado.innerHTML += (`• ${num}<br>`)
    //     }
    //     num++
    //     cont++
    // }

    // //Sequência de asteriscos
    // let cont = 0, numAsteriscos = 0, cont2 = 1

    // while(cont < 5) {
    //     while (numAsteriscos < cont2) {
    //         resultado.innerHTML += ('*')
    //         numAsteriscos++
    //     }
    //     resultado.innerHTML += (`<br>`)
    //     cont++
    //     cont2++
    //     numAsteriscos = 0
    // }