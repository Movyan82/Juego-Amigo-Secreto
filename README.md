# Juego Amigo Secreto

Este proyecto es una aplicación web sencilla para realizar un sorteo de **Amigo Secreto** de forma interactiva.  
Permite ingresar nombres, mostrarlos en una lista, y sortear aleatoriamente un amigo, con una cuenta regresiva que elimina al ganador de la lista hasta que todos sean sorteados.

#Características

- Agregar amigos a una lista evitando duplicados.
- Mostrar la lista actualizada en pantalla.
- Sortear un amigo aleatoriamente usando `Math.random()` y `Math.floor()`.
- Cuenta regresiva de 10 segundos antes de eliminar al ganador del sorteo.
- El sorteo continúa hasta que no queden nombres en la lista.

# Tecnologías usadas

- **HTML5**
- **CSS3**
- **JavaScript** (Vanilla JS, sin frameworks)

# Estructura del proyecto


📦 Juego-Amigo-Secreto
├── index.html        # Estructura HTML
├── style.css         # Estilos visuales
├── app.js            # Lógica del juego
└── README.md         # Documentación del proyecto


# Instalación y uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/juego-amigo-secreto.git
   ```

2. Abre el archivo `index.html` en tu navegador favorito.

3. Empieza a añadir nombres y a sortear.

# Cómo jugar

1. **Agregar amigos:**  
   - Escribe el nombre en el campo de texto.
   - Presiona **Añadir** para incorporarlo a la lista.

2. **Sortear amigo:**  
   - Presiona el botón **Sortear amigo**.
   - Aparecerá el ganador en pantalla con una cuenta regresiva de 10 segundos.
   - El ganador se eliminará automáticamente de la lista y podrás seguir sorteando.

3. **Final del juego:**  
   - Cuando no queden amigos, aparecerá un mensaje indicando que todos fueron sorteados.

# Posibles problemas

- **Campo vacío:** Si intentas añadir un nombre vacío, aparece una alerta.
- **Nombres duplicados:** No se permite agregar un nombre ya existente.
- **Lista vacía en sorteo:** Si intentas sortear sin amigos, aparece un aviso.

# Recursos adicionales

- [Cómo escribir un README increíble - Blog Alura](https://www.aluracursos.com/blog/como-escribir-un-readme-increible-en-tu-github)
- Apoyo técnico tomado de [ChatGPT (OpenAI)](https://openai.com/chatgpt) durante el desarrollo y documentación del proyecto.


# Autor

Jesús Idárraga
https://github.com/Movyan82