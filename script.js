document.addEventListener('DOMContentLoaded', () => {
    const nombreUsuario = document.getElementById('nombre-usuario');
    const ocupacionUsuario = document.getElementById('ocupacion-usuario');
    const perfilCard = document.querySelector('.perfil-card');

    let esRDJ = true;

    perfilCard.addEventListener('click', () => {
        if (esRDJ) {
            nombreUsuario.textContent = 'Roberta Downey Jr';
            ocupacionUsuario.textContent = 'Actriz';
            alert('Información cambiada a perfil femenino');
        } else {
            nombreUsuario.textContent = 'Robert Downey Jr';
            ocupacionUsuario.textContent = 'Actor';
            alert('Información cambiada a perfil masculino');
        }
        esRDJ = !esRDJ;
    });
});