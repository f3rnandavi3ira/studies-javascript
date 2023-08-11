var idade = 34
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Não vota.')
}else if (idade < 18 || idade > 65){ // (idade >= 16 && idade < 18) posso fazer assim, mas seria inflar o meu código
        console.log('Voto opicional.')
    } else {
        console.log('Voto obrigatório.')
    }
    






/*var idade = 17
if (idade < 18){
    console.log('Menor de Idade.')
}else{
    console.log('Maior de Idade.')
}*/