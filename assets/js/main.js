
function imc () {
let form = document.querySelector('.form')
let res = document.querySelector('#res')

function calculo(evento){
    evento.preventDefault();


    let peso1 = document.querySelector('#peso');
    let altura1 = document.querySelector('#altura')

    let peso = Number(peso1.value)
    let altura = Number(altura1.value)

    let resultado = peso / (altura*altura)

    if(resultado < 18.5){
        res.innerHTML = `<p>Seu IMC é ${resultado.toFixed(1)} (Abaixo do Peso)</p>`
        res.style.backgroundColor = "#61C9A8"
        res.style.padding = "2px"
    } else if(resultado >= 18.5 && resultado <= 24.9){ 
        res.innerHTML = `<p>Seu IMC é ${resultado.toFixed(1)} (Peso Normal)</p>`
        res.style.backgroundColor = "#61C9A8"
        res.style.padding = "2px"
    } else if(resultado > 25 && resultado <= 29.9){
        res.innerHTML = `<p>Seu IMC é ${resultado.toFixed(1)} (Sobrepeso)</p>`
        res.style.backgroundColor = "#61C9A8"
        res.style.padding = "2px"
    } else if(resultado > 30 && resultado <= 34.9){
        res.innerHTML = `<p>Seu IMC é ${resultado.toFixed(1)} (Obesidade grau 1))</p>`
        res.style.backgroundColor = "#61C9A8"
        res.style.padding = "2px"
    } else if(resultado > 35 && resultado <= 39.9){
        res.innerHTML = `<p>Seu IMC é ${resultado.toFixed(1)} (Obesidade grau 2)</p>`
        res.style.backgroundColor = "#61C9A8"
        res.style.padding = "2px"
    } else if(resultado > 40){
        res.innerHTML = `<p>Seu IMC é ${resultado.toFixed(1)} (Obesidade grau 3)</p>`
        res.style.backgroundColor = "#61C9A8"
        res.style.padding = "2px"
    } else {
        res.innerHTML = `<p>Não foi possível calcular seu resultado</p>`
        res.style.backgroundColor = "#61C9A8"
        res.style.padding = "2px"
    }
};

form.addEventListener('submit', calculo)

};

imc();