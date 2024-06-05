'use strict'

let numero

do{

	numero = parseInt(prompt("Ingrese el número: "))

	if(isNaN(numero)){
		alert("Ingrese un número")
	}
	
}while(isNaN(numero))

var numeroProhibido

for(let i = 2; i < numero; i++){
	if(numero % i == false){
		numeroProhibido = i
		break
	}
}

for(let i = 2; i < numero; i++){
	if(numero % i == false){
		
		if(i != numeroProhibido){
			document.write("-")
		}
		document.write(i)
	}
}