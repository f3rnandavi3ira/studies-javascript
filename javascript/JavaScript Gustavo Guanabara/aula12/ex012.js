var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora}h${minutos}.`)
if (hora < 6){
    console.log('Boa madrugada!')
} else if (hora < 12){
    console.log('bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}