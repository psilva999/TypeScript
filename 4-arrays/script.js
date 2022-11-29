"use strict";
//array 
const fall = [10, 20, 30, 17, 12], war = [1944, 1945, 'Reich has fallen', 'diminatus', 'Berlin is burning'];
function day(data) {
    return data.filter(n => n >= 17);
}
console.log(day(fall));
function month(ad) {
    return ad.filter(item => typeof item === 'string');
}
console.log(month(war));
//array dentro de array
const advance = [
    ['race', 'to', 'the', 'sea', 1914],
    ['Soldier', 'of', 'heaven', 1945]
];
//sintaxe alternativa
const bite = [21, 24, 19, 14, 15];
function hard(ad) {
    return ad.filter(e => e > 14);
}
console.log(hard(bite));
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json'), data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante')
            color = 'blue';
        else if (curso.nivel === 'avancado')
            color = 'red';
        else
            console.log('nivel do curso desconhecido');
        document.body.innerHTML += `
    <div>
      <h2 style="color: ${color};">${curso.nome}</h2>
      <p>Horas: ${curso.horas}h</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
      <p>Tags: ${curso.tags.join(', ')}</p>
      <p>Aulas: ${curso.idAulas.join(' | ')}</p>
    </div>
  `;
    });
}
