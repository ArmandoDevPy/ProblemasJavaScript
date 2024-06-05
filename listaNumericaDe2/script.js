'use strict'

let numero1, numero2, numeroMenor, numeroMayor

do{

	numero1 = parseInt(prompt("Ingrese primer número: "))

	if(isNaN(numero1)){
		alert("Ingrese un número")
	}
	
}while(isNaN(numero1))

do{

	numero2 = parseInt(prompt("Ingrese segundo número: "))

	if(numero2 == numero1){
		alert("Ingrese un número distinto que el primero")
	}

	if(isNaN(numero2)){
		alert("Ingrese un número")
	}
	
}while(isNaN(numero2) || numero1 == numero2)

if(numero1 > numero2){
	numeroMayor = numero1
	numeroMenor = numero2
}else{
	numeroMayor = numero2
	numeroMenor = numero1
}

for(let i = numeroMenor; i <= numeroMayor; i++){
	
	if(i % 2){
		if(i != numeroMenor){
			document.write("-")
		}
		document.write(i)
	}
}

