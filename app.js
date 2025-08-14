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

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agregue al menos uno.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    let contador = 10; // segundos
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉<br>
                            ⏳ Eliminando en ${contador} segundos...</li>`;

    // Cuenta regresiva
    let intervalo = setInterval(() => {
        contador--;
        resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉<br>
                                ⏳ Eliminando en ${contador} segundos...</li>`;

        if (contador <= 0) {
            clearInterval(intervalo);

            // Eliminar el amigo sorteado del arreglo
            amigos.splice(indiceAleatorio, 1);

            // Actualizar lista de la página
            mostrarLista();

            // Borrar mensaje del resultado
            resultado.innerHTML = "";

            // Si la lista quedó vacía, avisar
            if (amigos.length === 0) {
                alert("Todos los amigos han sido sorteados.");
            }
        }
    }, 1000); // 1000 ms = 1 segundo
}

