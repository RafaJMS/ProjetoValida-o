const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const campoDados = document.querySelectorAll('input')
const campoSelect = document.querySelectorAll('select')
const campoSpan = document.querySelectorAll('.span-required')
const campoDadosTech = document.querySelectorAll('input[type=checkbox')


function validarNome(){
    if (campoDados[0].value.length > 3) {
        resolverErro(0)
    }else{
        verErro(0)
    }
}

function validarSobrenome(){
    if (campoDados[1].value.length > 4) {
        resolverErro(1)
    }else{
        verErro(1)
    }
}

function validarEmail(){
        if (emailregex.test(campoDados[2].value)) {
            resolverErro(2)
        }else{
            verErro(2)
        }
}

function validarTech(){
    campoDadosTech.forEach(function(tech) {
        if(campoDados)
    });
    
}



console.log(campoDados)
console.log(campoDadosTech)

function verErro(index){
    campoDados[index].style.border = '2px solid #e63636'
    campoSpan[index].style.display = 'none'
    campoSpan[index].style.display = 'block'
}

function resolverErro(index){
    campoDados[index].style.border = '2px solid green'
    campoSpan[index].style.display = 'none'
}