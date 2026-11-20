const list = document.getElementById('lista');
const ideas = JSON.parse(localStorage.getItem('listaideas'))||[];

const button = document.getElementById('deleteall');

ideas.forEach((texto) =>{
 const li = document.createElement('li');
 li.textContent = texto;
 list.appendChild(li);
});
button.addEventListener('click', ()=>{
 localStorage.removeItem('listaideas');
 list.textContent= "";
});
