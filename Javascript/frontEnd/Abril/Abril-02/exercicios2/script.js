function milhas() {
    let quilometros = parseFloat(prompt('Informe um valor em km para ser convertido em milhas.'))
    let milhas = quilometros * 0.621371
    alert(`${quilometros} km resultam em ${milhas.toFixed(2)} mi.`)
}

function km() {
    let milhas = parseFloat(prompt('Informe um valor em mi para ser convertido em km.'))
    let quilometros = milhas * 1.60934
    alert(`${milhas} mi resultam em ${quilometros.toFixed(2)} km.`)
}

function imc() {
    let peso = Number(prompt('Informe o peso (em kg):'))
    let altura = Number(prompt('Informe a altura (em m):'))
    let imc = peso / (altura ** 2)
    alert(`O IMC resultante é de ${imc.toFixed(2)}`)
}

function padaria() {
    let paes = parseInt(prompt('Quantos pães deseja?'))
    let leite = parseInt(prompt('E quantos litros de leite?'))
    let total = (paes * 0.2) + (leite * 5.5)
    alert(`Pães: ${paes}\nLeite: ${leite} L\nTotal: R$${total.toFixed(2)}`)
}

function salario() {
    let salarioBruto = parseFloat(prompt('Digite o valor do salário bruto:\nAo valor, será aplicado um desconto constante de 15% para impostos.'))
    let desconto = 0.15 * salarioBruto
    let salarioLiquido = salarioBruto - desconto
    alert(`Salário Bruto: R$${salarioBruto.toFixed(2)}\nDesconto: R$${desconto.toFixed(2)}\nSalário Líquido: R$${salarioLiquido.toFixed(2)}`)
}

function grafica() {
    let milheiros = parseInt(prompt('Digite a quantidade de milheiros trabalhados:'))
    let total = parseFloat(milheiros * 169.90)
    let imposto = parseFloat(total * 0.09)
    let totalLiquido = parseFloat(total - imposto)
    alert(`Milheiro(s): ${milheiros}\nTotal a pagar: R$${total.toFixed(2)}\nImposto: R$${imposto.toFixed(2)}\nTotal Líquido: R$${totalLiquido.toFixed(2)}`)
}