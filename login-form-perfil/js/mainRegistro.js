const formulario = document.getElementById('form')
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    //obteniendo los  valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const genero = document.getElementById('genero').value;
    const departamento = document.getElementById('departamento').value;
    const ciudad = document.getElementById('ciudad').value;
    const telefono = document.getElementById('numero').value;
    const descripcion = document.getElementById('descripcion').value;


    const datosUsuario = {
        usuario: nombre,
        nacimiento: fecha,
        genero: genero,
        departamento: departamento,
        ciudad: ciudad,
        telefono: telefono,
        descripcion: descripcion
    }

    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario))

    window.location.href='vistaperfil.html';

})