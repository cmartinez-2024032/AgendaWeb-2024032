const params = new URLSearchParams(window.location.search);

const correo = params.get("email");

const correoSpan = document.getElementById("correoUsuario");

if (correo) {
    correoSpan.textContent = correo;
} else {
    correoSpan.textContent = "usuario@ejemplo.com";
}
