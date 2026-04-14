
const aprendices = [
    { nombre: "Ana", nota: 4.5, programa: "ADSO" },
    { nombre: "Luis", nota: 2.8, programa: "ADSO" },
    { nombre: "Marta", nota: 3.7, programa: "Diseno Web" },
    { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
    { nombre: "Sofia", nota: 5.0, programa: "Diseno Web" }
];

function listar() {
  aprendices.forEach(a => {
    console.log(a.nombre, a.nota, a.programa);
  });
}

function aprobados() {
  return aprendices.filter(a => a.nota >= 3);
}

function reprobados() {
  return aprendices.filter(a => a.nota < 3);
}

function nombresMayus() {
  return aprendices.map(a => a.nombre.toUpperCase());
}
function ordenar() {
  return [...aprendices].sort((a, b) => b.nota - a.nota);
}

function clasificar(nota) {
  switch (true) {
    case nota < 3: return "Bajo";
    case nota < 4: return "Básico";
    case nota < 4.5: return "Alto";
    default: return "Superior";
  }
}

function ordenar() {
  return [...aprendices].sort((a, b) => b.nota - a.nota);
}

let opcion;

while (opcion !== 0) {
  opcion = parseInt(prompt(`
1. Mostrar
2. Aprobados
3. Reprobados
4. Nombres en mayúscula
5. Promedio
6. Ordenar
7. Clasificar nota
0. Salir
`));

  switch (opcion) {
    case 1: listar(); break;
    case 2: console.log(aprobados()); break;
    case 3: console.log(reprobados()); break;
    case 4: console.log(nombresMayus()); break;
    case 5: console.log(promedio()); break;
    case 6: console.log(ordenar()); break;
    case 7:
      let nota = parseFloat(prompt("Ingrese nota:"));
      console.log(clasificar(nota));
      break;
  }
}