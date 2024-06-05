'use strict'

let number

do{
	number = parseInt(prompt("ENTER A NUMBER: "))

	while(isNaN(number)){
		alert("IT'S NOT A NUMBER")
		break
	}
	
}while(isNaN(number))

if(number % 2){
	alert("Is not an even number")
}else{
	alert("The number is even")
}