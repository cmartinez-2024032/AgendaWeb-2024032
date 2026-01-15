let tareas = [];

const prioridadesTexto = {
    1: "Alta",
    2: "Media",
    3: "Baja"
};

function agregarTarea() {
    const textoInput = document.getElementById("tarea");
    const prioridadSelect = document.getElementById("prioridad");

    const texto = textoInput.value.trim();
    const prioridad = Number(prioridadSelect.value);

    if (texto === "") return;

    tareas.push({
        texto,
        prioridad
    });

    textoInput.value = "";
    renderizar();
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    renderizar();
}

function editarTarea(index) {
    const nuevoTexto = prompt("Editar tarea:", tareas[index].texto);
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
        tareas[index].texto = nuevoTexto.trim();
        renderizar();
    }
}

function renderizar() {
    const lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";

    tareas.sort((a, b) => a.prioridad - b.prioridad);

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>
                ${tarea.texto}
                <small>(Prioridad ${prioridadesTexto[tarea.prioridad]})</small>
            </span>
            <div>
                <button onclick="editarTarea(${index})">✏️</button>
                <button onclick="eliminarTarea(${index})">🗑️</button>
            </div>
        `;

        lista.appendChild(li);
    });
}
