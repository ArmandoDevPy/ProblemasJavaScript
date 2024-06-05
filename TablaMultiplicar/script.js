'use strict'

let number

do{
	number = parseInt(prompt("Enter a number"))

	while(isNaN(number)){
		alert("it's not a number")
		break
	}

	while(number < 1){
		alert("Enter a number greater than 0")
		break
	}
	
}while(isNaN(number) || number < 1)

let product = 1

for(let j = 1; j <= number; j++){
	document.write(`Tabla del ${j} <br>`)
	for(let i = 1; i <= 12; i++){
	product =  j * i
	document.write(`${j} * ${i} = ${product} <br>`)
	}
	document.write("<br>")
}