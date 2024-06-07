let i = 2;
let nuevo = document.getElementById("nuevo");
nuevo.addEventListener("click", () => {
    
    let div = document.createElement("div");
    div.setAttribute("class", "mb-3");
    let label_nombre = document.createElement("label");
    let input_nombre = document.createElement("input");
    label_nombre.setAttribute("for", "nombre" + i);
    label_nombre.setAttribute("class", "form-label");
    label_nombre.innerText = "Nombre " + i;
    input_nombre.setAttribute("name", "nombres" + i);
    input_nombre.setAttribute("type", "text");
    input_nombre.setAttribute("class", "form-control");

    div.appendChild(label_nombre);
    div.appendChild(input_nombre);
    document.getElementById("formularios").appendChild(div);

    i++;
});

function pintar(datos) {
    let tbody = document.getElementById("contenido");
    datos.forEach(persona => {
        let row = document.createElement("tr");
        let celda1 = document.createElement("td");
        let celda2 = document.createElement("td");
        celda1.innerText = persona.nombre;
        celda2.innerText = persona.matricula;
        row.appendChild(celda1);
        row.appendChild(celda2);
        tbody.appendChild(row);
    });
}

document.getElementById("formularios").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let nombre = document.getElementById("nombres").value;
    let matricula = document.getElementById("matri").value;
    pintar([{ nombre: nombre, matricula: matricula }]);
});


