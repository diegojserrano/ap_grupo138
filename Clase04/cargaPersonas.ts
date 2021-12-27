
let persona = { nombre: "", edad: 0 }

function cambioNombre(cuadroTexto: HTMLInputElement): void {
    persona.nombre = cuadroTexto.value
    mostrarPersona();
}

function cambioEdad(rango: HTMLInputElement): void {
    persona.edad = parseInt(rango.value)
    mostrarPersona();
}

function mostrarPersona(): void {
    document.getElementById("divPersona").innerText = persona.nombre + " " + persona.edad
    document.getElementById("h1").innerText = `Nueva Persona: ${persona.nombre}`
}