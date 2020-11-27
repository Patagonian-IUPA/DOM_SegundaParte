/* const itemList = document.getElementById('items');
console.log(itemList);

const itemList2 = document.getElementsByClassName('list-group');
console.log(itemList2[0]);

const itemList3 = document.getElementsByTagName('ul')

console.log(itemList3);
 */
/* const itemList4 = document.querySelector('ul') */

const itemList = document.getElementById('items');
/* 
console.log(itemList.parentNode);
console.log(itemList.parentElement);
console.log(itemList.closest('div'));
 */

/* itemList.parentNode.parentNode.style.fontSize = '45px' */
/* itemList.parentNode.style.backgroundColor = "#454545" */
/* const childNodes = itemList.childNodes
console.log(itemList.children);
itemList.children[1].textContent = "Vengo desde JS"
itemList.children[1].style.color = "red";
itemList.children[3].style.color = "blue"; */
/* 
console.log(itemList.firstChild);
console.log(itemList.lastChild);


console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);

itemList.lastElementChild.textContent = "Otro del DOM!!"; */

/* console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);

console.log(itemList.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling); */


/* const p = document.createElement('p')
const div = document.createElement('div')
const form = document.createElement('form') */

/* const li = document.createElement('li')
li.classList.add("list-group-item");
li.classList.add("test");
const textoLi = document.createTextNode("Diego no murio!");
li.setAttribute('title', 'Yo vengo desde el DOM!!')

li.setAttribute('id', 'IdList3')
li.appendChild(textoLi);
itemList.appendChild(li); */

/* const miDiv = document.createElement('div')
miDiv.appendChild(document.createTextNode('Esto es DOM!'))

const main = document.getElementById("main");
const h2 = main.firstElementChild; */
/* 
main.insertBefore(miDiv, h2);

miDiv.style.fontSize = "40px";
miDiv.style.color = "coral"; */

/* let variable = "asdadsada";

const li = `<li id= "miId" class="list-group-item">${variable}</li>`;
itemList.innerHTML += li; */

const arrayNombres = ['Edu', 'Emi', 'Maria', 'Sil', 'Leo', 'Santi'];

const frag = document.createDocumentFragment();

/* arrayNombres.forEach(item => {
    const li = document.createElement('li')
    li.classList.add("list-group-item");
    li.classList.add("test");
    const textoLi = document.createTextNode(item);
    li.setAttribute('title', item)
    li.setAttribute('id', 'IdList3')
    li.appendChild(textoLi);
    frag.insertBefore(li, itemList.firstElement)

  
})*/

/* itemList.appendChild(frag);  */

const template = document.getElementById("mitemplate").content;

arrayNombres.forEach((item, index) => {
    const span = template.getElementById('texto');
    span.textContent = item;
    const nodo = template.cloneNode(true);
    frag.appendChild(nodo);
})

itemList.appendChild(frag);