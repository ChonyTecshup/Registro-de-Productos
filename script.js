document.getElementById("formProducto").addEventListener("submit", function(e){
    //retencion de acciones por defecto
    e.preventDefault();


    //variables relacionadas al formulario
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const precio = document.getElementById("precio").value;
    const imagen = document.getElementById("imagen").files[0];


    //leer imagen (opcional)
    if (imagen){
        const reader = new FileReader();
        reader.onload = function(){
            guardarDatos(nombre,descripcion,precio,reader.result);
        };
        reader.readAsDataURL(imagen);
    }else{
        guardarDatos(nombre,descripcion,precio,null);
    }
});
    //guardar datos
    function guardarDatos(nombre,descripcion,precio,imgBase64){
        const data = {
            nombre,
            descripcion,
            precio,
            imagen: imgBase64
        };
        localStorage.setItem("producto", JSON.stringify(data));
        window.location.href = "reporte.html"
    }