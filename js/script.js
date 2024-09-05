var container = document.querySelector("#mostrarfrase");


function gerarFrase(){
    var indiceAleatorio = parseInt(Math.random() * 100);
    container.innerHTML = `
        <div class="frase">${frases[indiceAleatorio]}</div>
    `
}