document.querySelectorAll('.btn-detalles').forEach(btn => {
    btn.addEventListener('click', () => {

        const params = new URLSearchParams({
            nombre: btn.dataset.nombre,
            telefono: btn.dataset.telefono,
            correo: btn.dataset.correo,
            sexo: btn.dataset.sexo,
        });

        window.location.href = `detalleContacto.html?${params.toString()}`;
    });
});
