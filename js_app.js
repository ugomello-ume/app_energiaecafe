/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
let economia=0

function simular(){

let conta=document.getElementById("conta").value

economia=conta*0.15

let anual=economia*12
let vinteecinco=anual*25

animarSaldo(economia)

document.getElementById("mensal").innerHTML="R$ "+economia.toFixed(2)
document.getElementById("anual").innerHTML="R$ "+anual.toFixed(2)
document.getElementById("vinteecinco").innerHTML="R$ "+vinteecinco.toFixed(2)

document.getElementById("resultado").classList.remove("hidden")

document.getElementById("barra").style.width="85%"

}

function animarSaldo(valor){

let saldo=document.getElementById("saldo")

let atual=0

let passo=valor/40

let i=setInterval(()=>{

atual+=passo

saldo.innerHTML="R$ "+atual.toFixed(2)

if(atual>=valor){

saldo.innerHTML="R$ "+valor.toFixed(2)

clearInterval(i)

}

},40)

}

function whats(){

let conta=document.getElementById("conta").value

let msg=encodeURIComponent(

"Olá! Fiz a simulação de economia.\n"+
"Conta média: R$ "+conta+
"\nEconomia estimada: R$ "+economia.toFixed(2)

)

window.location.href="https://wa.me/5562991687447?text="+msg

}

