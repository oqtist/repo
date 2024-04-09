function mes() {
    let numMes = parseInt(prompt('Digite o número a ser correspondido a um mês'))
    switch (numMes) {
        case 1:
            alert('Janeiro')
            break
        case 2:
            alert('Fevereiro')
            break
        case 3:
            alert('Março')
            break
        case 4:
            alert('Abril')
            break
        case 5:
            alert('Maio')
            break
        case 6:
            alert('Junho')
            break
        case 7:
            alert('Julho')
            break
        case 8:
            alert('Agosto')
            break
        case 9:
            alert('Setembro')
            break
        case 10:
            alert('Outubro')
            break
        case 11:
            alert('Novembro')
            break
        case 12:
            alert('Dezembro')
            break
        default:
            alert('Mês Inválido.')     
    }

}

function calculadora() {
    let n1 = Number(prompt('Digite o primeiro número.'))
    let n2 = Number(prompt('Digite o segundo número.'))
    let menu = Number(prompt('Escolha uma opção:\n1) Adição\n2) Subtração\n3) Divisão\n4) Multiplicação'))
    switch(menu) {
        case 1:
            let soma = n1 + n2
            alert(`A soma resulta em ${soma}.`)
            break
        case 2:
            let sub = n1 - n2
            alert(`A subtração resulta em ${sub}.`)
            break
        case 3:
            let div = n1 / n2
            alert(`A divisão resulta em ${div}.`)
            break
        case 4:
            let mult = n1 * n2
            alert(`A multiplicação resulta em ${mult}.`)
            break
        default:
            alert('Opção Inválida.')
    }
}

function geracao() {
    let ano = Number(prompt('Digite seu ano de nascimento:'))
    switch(true) {
        case ano < 1946:
            alert('Você não tem geração.')
            break
        case ano < 1965:
           alert('Você é da geração "Baby Boomer".')
           break
        case ano < 1981:
            alert('Você é da geração "X".')
            break
        case ano < 1997:
            alert('Você é da geração "Y".') 
            break
        case ano < 2011:
            alert('Você é da geração "Z".')
            break
        case ano >= 2011 && ano < 2025:
            alert('Você é da geração "Alfa".')
            break
        default:
            alert('Ano Inválido.')
    } 

}

function diasMes() {
    let mes = Number(prompt('Digite o número que equivale ao mês:'))
    switch(mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert('O mês tem 31 dias.')
            break
        case 4:
        case 6:
        case 9:
        case 11:
            alert('O mês tem 30 dias.')
            break
        case 2:
            alert('O mês tem 28 dias.')
            break
        default:
            alert('Mês inválido.')
    }
}

function banco() {
    let saldo = Number(500)
    let numBanco = Number(prompt('Digite o número da sua conta bancária:'))
    let menu = Number(prompt('Escolha uma opção:\n1)Saldo\n2)Depósito\n3)Saque'))
    switch(menu) {
        case 1:
            alert(`Seu saldo é de R$${saldo}.`)
            break
        case 2:
            let deposito = Number(prompt('Digite o valor a ser depositado:'))
            saldo += deposito
            alert(`R$${deposito} depositados.\nSeu novo saldo é de R$${saldo}`)
            break
        case 3:
            let saque = Number(prompt('Digite o valor a ser sacado:'))
            if (saque > saldo) {
                alert('Saldo insuficiente para transação.')
            } else {
                saldo -= saque
                alert(`R$${saque} sacados.\nSaldo restante: R$${saldo}`)
            }
            break
        default:
            alert(`Opção Inválida.`)
    }
}