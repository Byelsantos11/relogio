const horario= document.getElementById ('hora')
const minutagem= document.getElementById ('minuto')
const segundagem= document.getElementById ('segundos')

function newtime(){
    
const date= new Date();

const hours = date.getHours()
const minutes= date.getMinutes()
const seconds= date.getSeconds()

horario.textContent= fixtime(hours)
minutagem.textContent= fixtime(minutes)
segundos.textContent= fixtime (seconds)

}



function fixtime(time){
    return time<10?'0'+time:time
}

setInterval (newtime, 1000)
