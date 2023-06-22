//Exercicio 1
function somaReutilizavel(a,b){
    soma = (a+b)*5
    return soma
}
let resultado = 0
resultado = somaReutilizavel(10,10)
console.log(resultado)


//Exercicio 2
function letraInicial(nome,sobreNome){
    const nome1 = nome[0].toUpperCase()
    const sobreNome1 = sobreNome[0].toUpperCase() 
    return nome1 + sobreNome1
}


function nomeCompleto(){
    let nomeCompleto1 = `As letras inicias do meu nome completo são ${letraInicial("Eduardo","Cunha")}.`
    return nomeCompleto1
    
}
console.log(nomeCompleto())

//Exercicio 3
function par(n){
   if(n %2 == 0){  
        return true
    }
    else{
        return false
    }
}

function impar(n){
    if(n %2 == 0){
        return false
    }
    else{
        return true
    }
}

function letrasProduto(produto){

    if(par(produto.length)){
        return "O número de letras deste produto é par"
    } 
    else if(impar(produto.length)){
        return "O número de letras deste produto é ímpar"
    }
}

console.log(letrasProduto("abacax"))