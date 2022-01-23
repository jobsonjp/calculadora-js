const btn$ = document.getElementById("btnIncrementar")
const contador$ = document.getElementById("contador")

let contador = 0

contador$.innerHTML = contador

btn$.addEventListener("click", function (){
    contador++
    contador$.innerHTML = contador
})