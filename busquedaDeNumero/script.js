'use strict'

let array = []
let busqueda


for(let i = 0 ; i < 6; i++){
	array.push(parseInt(prompt(`Ingrese en número ${i+1}: `)))
}

document.write(array)

array.sort(function(a, b){return a-b})
document.write("<br>")
document.write(array)

array.reverse()
document.write("<br>")
document.write(array)
document.write("<br>")
document.write(array.length)

busqueda = parseInt(prompt("Ingrese el número a buscar: "))

let indice = array.indexOf(busqueda)

document.write("<br>")
document.write(indice)