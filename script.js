var valorDolartext = prompt("Qual valor em dolar")

var valorDolarNum = parseFloat(valorDolartext)

var valorEmReal = valorDolarNum * 5.50
var valorEmRealDecimal = valorEmReal.toFixed(2)

alert(valorEmReal)