const contenedor = document.getElementById("reporteData");
const data = JSON.parse(localStorage.getItem("producto"));

if (data) {
  contenedor.innerHTML = `
    <h3>${data.nombre}</h3>
    <p><strong>Descripción:</strong> ${data.descripcion}</p>
    <p><strong>Precio:</strong> S/ ${data.precio}</p>
    ${data.imagen ? `<img src="${data.imagen}">` : ""}
  `;
}