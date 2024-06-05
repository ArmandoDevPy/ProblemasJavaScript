'use strict'

let suma = 0
let centinela = true
let num
let cantidad = 0

while(centinela === true){
    do{
        num = parseInt(prompt("Ingrese número:"))

        while(isNaN(num)){
            alert("NO ES UN NUMERO")
            break
        }
    }while(isNaN(num))

    if(num >= 0){
        suma += num
        cantidad += 1
    }else{
        centinela = false
        break
    }
}

let media
media = suma / cantidad
alert(`La media es ${media} y la suma es ${suma} `)