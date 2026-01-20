const params = new URLSearchParams(window.location.search);

document.getElementById('nombre').textContent = params.get('nombre');
document.getElementById('telefono').textContent = params.get('telefono');
document.getElementById('correo').textContent = params.get('correo');
document.getElementById('sexo').textContent = params.get('sexo');
document.getElementById('direccion').textContent = params.get('direccion');
    