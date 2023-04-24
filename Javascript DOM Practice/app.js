// const title = document.getElementById('main-headeing');

// console.log(title);

// const listItem = document.getElementsByClassName('listItems');

// console.log(listItem)

const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// const container = document.querySelector('div');
// console.log(container);

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = '5rem';
// }

const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements
ul.append(li);

const firstListItem = document.querySelector('.listItems');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// Modifying the text
li.innerText = 'Hi Japan';

// Modifying the Attributes & Classes
// li.setAttribute('id', 'main-headeing');
// li.removeAttribute('id');

// const title = document.querySelector('#main-headeing');
// console.log(title.getAttribute('id'));

// li.classList.remove('list-items');
// li.classList.add('list-items');

// console.log(li.classList.contains('list-items'));

// li.remove();
