// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo () {
    let nuevoAmigo = document.getElementById(`amigo`).value.trim();

    if (nuevoAmigo === "") {
        alert(`Celda vacía, por favor ingrese el nombre de un amigo.`);
        return;
    } if (amigos.includes(nuevoAmigo)) {
        alert(`El nombre ingresado, ya se encuentra en la lista de amigos.`);
        return;

    } else {
        amigos.push(nuevoAmigo);
        document.getElementById(`amigo`).value = "";
        console.log(amigos);
        mostrarLista();
    }
}

function mostrarLista(){
    let lista = document.getElementById(`listaAmigos`);
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert(`No hay amigos en la lista para el sorteo. Ingrese los nombres de los amigos.`);
        return;
    } 
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigo[indiceAleatorio];

    document.getElementById(`resultado`).innerHTML =
        `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
