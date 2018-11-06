
// Padrao JS
/*
var dobroDovalor=function(numero){
    return numero*2
}

console.log(dobroDovalor(7))*/
//##########################


// quando tem dois parametros tem sentido usar o parenteses
/*
var dobroDovalor=(numero,numero2)=>{
    return numero*2
}

console.log(dobroDovalor(7))*/

//###########################################


//Arrow function
// quando tem somente um parametro, podemos omitir os parenteses

var dobroDovalor= numero=>{
    return numero*2
}

console.log(dobroDovalor(7))

///outra forma, o return apos a flecha

var dobroDovalor2=numero=>numero*2;

console.log(dobroDovalor2(7))

