document.getElementById("btnTexto").addEventListener("click", function () {
    document.getElementById("texto").textContent = "Desafio 1 Check ;)";
});

document.getElementById("btnColor").addEventListener("click", function () {
    // classList.toggle revisa si una clase está para agregarla o quitarla
    // class="text-xl font...."
    
    // customizando para un elemento unico de html
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("bg-gray-100");

    // customizando para varios elementos con querySelectAll
    document.querySelectorAll("h1").forEach(sec => {
        sec.classList.toggle("text-white");
    });
    document.querySelectorAll("h1").forEach(sec => {
        sec.classList.toggle("text-black");
    });
    
    // podria hacerse también con classList.remove y ..add en lugar de toggle
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.toggle("bg-gray-200");
    });
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.toggle("bg-white");
    });

    // otra forma de customizar un id especifico con querySelector y #
    // solo para hacer el cambio de text se revisa si la clase tiene "."
    let esNocturno = document.querySelector("#modoNocturno").classList.toggle(".");
    document.querySelector("#modoNocturno").textContent = esNocturno ? "🌞 Modo Luminoso" : "🌃 Modo nocturno";
});

document.getElementById("btnAgregar").addEventListener("click", function () {
    // Se usa value y no textContent porque no es un elemento html con contenido sino un "valor externo"
    let entrada = document.getElementById("inputTarea").value.trim();
    if (!entrada) return; // Evita agregar tareas vacías
        let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
        tareas.push(entrada);
        localStorage.setItem("tareas", JSON.stringify(tareas));

        agregarTarea(entrada);
        document.getElementById("inputTarea").value = ""; // Limpiar input
    });

    function agregarTarea(texto) {
        let tarea = document.createElement("li");
        tarea.textContent = texto;

        let botonRemove = document.createElement("button");
        botonRemove.textContent = "Eliminar";
        botonRemove.style.float = "right";
        botonRemove.style.color = "red";

        botonRemove.onclick = function () {
            this.parentElement.remove();
            eliminarDeLocalStorage(texto);
        };

        tarea.appendChild(botonRemove);
        document.getElementById("listaTareas").appendChild(tarea);
        }

        function cargarTareas() {
            let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
            tareas.forEach(tarea => agregarTarea(tarea));
        }

        function eliminarDeLocalStorage(texto) {
            let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
            tareas = tareas.filter(t => t !== texto);
            localStorage.setItem("tareas", JSON.stringify(tareas));
        };

document.getElementById("btnUsuarios").addEventListener("click", function () {
    let user;
    let data;
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            user = data[i];
            item = document.createElement("li");
            item.textContent = `Nombre: ${user.name}, Email: ${user.email}`;
            document.getElementById("listaUsuarios").appendChild(item);
        }

    }) .catch(error => console.error("Error, no se pudo cargar usuarios ", error));
});
// 🟢 DESAFÍO 5 (Extra): Guardar y cargar la lista de tareas usando localStorage
// Lectura recomendada: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// TODO: Guardar las tareas en localStorage cada vez que se agregue o elimine una
// TODO: Cargar las tareas desde localStorage cuando la página se recargue

// 🟢 DESAFÍO 6 (Extra): Filtrar usuarios con correos que contengan "biz"
// Lectura recomendada: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// TODO: Modificar el código del desafío 4 para mostrar solo usuarios con "@biz" en su email
