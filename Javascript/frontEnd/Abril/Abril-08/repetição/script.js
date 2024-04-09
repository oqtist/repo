
    let resultado = document.getElementById('divResultado')
    console.log(resultado);

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

    // //Quadrados 1-10
    // let cont = 0
    // while (cont < 11) {
    //     resultado.innerHTML += (`${cont ** 2}<br>`)
    //     cont++
    // }

    // //10-1 (decrescente)
    // let cont = 10
    // while (cont > 0) {
    //     resultado.innerHTML += (`${cont}<br>`)
    //     cont--
    // }

    // //Soma 1-100
    // let cont = 0
    // let soma = 0
    // while (cont <= 100) {
    //     cont++
    //     soma += cont
    //     resultado.innerHTML = (`Soma dos números de 1 a 100:<br>${soma}`)
    // }

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

    //fatorial de um número
    let cont = 1
    let num = Number(prompt('Digite o número a ser fatoriado:'))
    let fatorial
    while(cont < num) {
        cont*=
        cont++
    }
    resultado.innerHTML = (`O fatorial do número é ${cont}`)