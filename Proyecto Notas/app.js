
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
