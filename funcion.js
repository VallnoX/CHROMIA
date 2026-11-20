let colores = [
  '#E8A0BF', '#D88CBE', '#C77DFF', '#B8A1E3',
  '#A78BFA', '#E6B8D7', '#F2C6DE', '#D8B4E2',
  '#A2D2FF', '#89CFF0', '#7EB6D9', '#5DADE2',
  '#6C91BF', '#BDE0FE', '#CDE7F0', '#8ECAE6',
  '#A8D5BA', '#95D5B2', '#74C69D', '#52B788',
  '#B7E4C7', '#D8F3DC', '#A3B18A', '#588157',
  '#FFE08A', '#FFD166', '#F4A261', '#E9C46A',
  '#F6BD60', '#F7D794', '#F4A896', '#E59866',
  '#FFADAD', '#FF8585', '#F08080', '#E76F51',
  '#F4978E', '#E5989B', '#D96C75', '#C44569',
  '#F2E9E4', '#EDE0D4', '#D6CCC2', '#C9ADA7',
  '#B7B7A4', '#A5A58D', '#808080', '#696969',
  '#264653', '#2A9D8F', '#354F52', '#52796F',
  '#3D405B', '#463F5F', '#5E548E', '#6D597A'
];

let boton = document.getElementById('generar');

let paleta = document.querySelector('.paleta');

let tarjetas = document.querySelectorAll('.color');

const btn = document.querySelector('#btn-guardar');

const idea = document.querySelector('#idea');

function generate(){
  tarjetas.forEach((tarjeta)=>{
    let cambio = Math.floor(Math.random()*(colores.length));
    tarjeta.style.backgroundColor = colores[cambio];
  });
}
boton.addEventListener('click', generate);

function guardar(){
 let ideas = JSON.parse(localStorage.getItem('listaideas'))||[];
 ideas.push(idea.value);
 localStorage.setItem('listaideas', JSON.stringify(ideas));
 idea.value = "";
}
btn.addEventListener('click', guardar);
