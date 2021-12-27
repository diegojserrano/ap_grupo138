var persona = { nombre: "", edad: 0 };
function cambioNombre(cuadroTexto) {
    persona.nombre = cuadroTexto.value;
    mostrarPersona();
}
function cambioEdad(rango) {
    persona.edad = parseInt(rango.value);
    mostrarPersona();
}
function mostrarPersona() {
    document.getElementById("divPersona").innerText = persona.nombre + " " + persona.edad;
    document.getElementById("h1").innerText = "Nueva Persona: ".concat(persona.nombre);
}
