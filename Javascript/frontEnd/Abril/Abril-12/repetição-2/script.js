function p2e7() {
    let p2e7 = document.getElementById('p2e7')

    let contL = 0, contA = 0
    let largura = Number(prompt('Escreva a largura do quadro: '))
    let altura = Number(prompt('Escreva a altura do quadro: '))
    p2e7.innerHTML = ('')
    
    while (contA < altura) {
        contL = 0
        while (contL < largura) {
            p2e7.innerHTML += (`#`)
            contL++
        }
        contA++
        p2e7.innerHTML += (`<br>`)
    }

}

function p3ej(){
    let p3ej = document.getElementById('p3ej')
    let salarioDisplay = document.getElementById('p3ejSalario')
    let maiorDisplay = document.getElementById('p3ejMaior')
    let salarioMenorDisplay = document.getElementById('p3ejMenor')
    let total = document.getElementById('p3ejTotal')
    let totalCorrigido = document.getElementById('p3ejTotalCorrigido')

    let salario = 1
    let maior = 0
    let soma = 0
    let somaCorrigida = 0

    while (salario > 0) {
        salario = Number(prompt('Digite um salário:\n(Digite 0 para parar)'))
        if(salario >= 2500 && salario != 0) {
        salarioDisplay.innerHTML += (`R$ ${salario.toFixed(2)}<br>`)
        salarioMenorDisplay.innerHTML += (`R$ ${(salario * 1.1).toFixed(2)}<br>`)
        soma += salario
        somaCorrigida += salario
        }
        if (salario > maior) {
            maior = salario
        }
        if (salario < 2500 && salario != 0) {
            salarioMenorDisplay.innerHTML += (`R$ ${(salario * 1.1).toFixed(2)}<br>`)
            somaCorrigida += (salario * 1.1)
        }
    }
    total.innerHTML = (`R$ ${soma}`)
    totalCorrigido.innerHTML = (`R$ ${somaCorrigida.toFixed(2)}`)
}