function insert(_numero){
    var numero = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = numero + _numero

}

function limpar(){
    document.getElementById('display').innerHTML = ""
}

function limpaDigito(){
    var resultado = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    let sentenca = document.getElementById('display').innerHTML 

    if(sentenca){
        document.getElementById('display').innerHTML = eval(sentenca)
    }
    else {
        document.getElementById('display').innerHTML = "0"
    }
}