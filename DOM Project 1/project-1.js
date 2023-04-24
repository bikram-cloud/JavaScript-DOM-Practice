const btn = document.querySelector('#new-quet');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [
  {
    quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi suscipit consectetur eveniet totam voluptas ex quae libero. Asperiores, illo amet. Inventore nihil recusandae eaque voluptates reiciendis vitae ipsa veniam.`,
    person: `Neupane Bikram`,
  },
  {
    quote: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, blanditiis?`,
    person: `Sapkota Rojina`,
  },
  {
    quote: `Lorem ipsum dolor sit amet.`,
    person: `Neupane Hari`,
  },
  {
    quote: `Lorem, ipsum.`,
    person: `Neupane Sabatri`,
  },
  {
    quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et ea porro totam facere perferendis alias placeat nesciunt suscipit. Rem eius iste quos tempora, voluptatem nemo provident blanditiis maxime qui neque quas non quidem vero nam consectetur ab inventore sapiente laudantium excepturi omnis cupiditate reiciendis incidunt, autem eveniet. Veniam, magni.`,
    person: `Neupane Laxman`,
  },
];

btn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
