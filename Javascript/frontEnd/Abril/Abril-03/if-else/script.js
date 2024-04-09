function idadeEleicao() {
    let idade = Number(prompt('Qual é a sua idade?'))
    if(idade < 16) {
        alert('Você não pode votar.')
    } else if(idade <= 17 || idade > 69 ) {
        alert('Seu voto é opcional.')
    } else {
        alert('Você pode votar.')
    }
}

function media() {
    let nota1 = Number(prompt('Digite a primeira nota:'))
    let nota2 = Number(prompt('Digite a segunda nota:'))
    let nota3 = Number(prompt('Digite a terceira nota:'))
    let media = (nota1 + nota2 + nota3) / 3
    if (media >= 7) {
        alert(`Média: ${media.toFixed(1)}\nAprovada!`)
    } else {
        alert(`Média: ${media.toFixed(1)}\nReprovada!`)
    }
}

function imc2() {
    let altura = Number(prompt('Digite a sua altura (em m):'))
    let peso = Number(prompt('Digite o seu peso (em kg):'))
    let imc = peso / (altura ** 2)
    if (imc < 18) {
        alert(`Seu IMC é de ${imc.toFixed(2)}\nVocê está abaixo do peso.`)
    } else if(imc < 26) {
        alert(`Seu IMC é de ${imc.toFixed(2)}\nVocê está na faixa de peso ideal.`)
    } else {
        alert(`Seu IMC é de ${imc.toFixed(2)}\nVocê está acima do peso.`)
    }
}

// function densDemo() {
//     let habitantes = Number(prompt('Digite o total de habitantes:'))
//     let area = Number(prompt('Digite a área (em km²):'))
//     let densidade = habitantes / area
//     if (densidade > 100) {
//         alert(`Densidade: Alta\n(~${densidade.toFixed(1)} habitantes/km²)`)
//     } else if (densidade >= 25) {
//         alert(`Densidade: Média\n(~${densidade.toFixed(1)} habitantes/km²)`)
//     } else {
//         alert(`Densidade: Baixa\n(~${densidade.toFixed(1)} habitantes/km²)`)
//     }
// }

function densDemoAlt() {
    let habitantes = Number(prompt('Digite o total de habitantes:'))
    let area = Number(prompt('Digite a área (em km²):'))
    let densidade = habitantes / area
    let nivelDem
    if (densidade > 100) {
        nivelDem = 'Alta'
    } else if (densidade >= 25) {
        nivelDem = 'Média'
    } else {
        nivelDem = 'Baixa'
    }
    alert(`Densidade: ${nivelDem}\n(${densidade}~ habitantes por km²)`)
}