'use strict'

let number1, number2, multiplication, 
division, addition, 
subtraction

do{
	number1 = parseInt(prompt("Enter the first number: "))

	while(isNaN(number1)){
		alert("Enter a number valid")
		break
	}
	
}while(isNaN(number1))

do{
	number2 = parseInt(prompt("Enter the second number: "))

	while(isNaN(number2)){
		alert("Enter a number valid")
		break
	}

		while(number2 == 0){
		alert("Enter a number other than 0")
		break
	}
	
}while(isNaN(number2) || number2 == 0)

addition = number1 + number2
subtraction = number1 - number2
multiplication = number1 * number2
division = number1 / number2

document.write(`${number1} + ${number2} = ${addition} <br>`)
document.write(`${number1} - ${number2} = ${subtraction} <br>`)
document.write(`${number1} * ${number2} = ${multiplication} <br>`)
document.write(`${number1} / ${number2} = ${division} <br>`)