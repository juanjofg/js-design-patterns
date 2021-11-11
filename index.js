// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const user = { id: 100, name: 'Howard Moon'};
const userWPass = { ...user, password: 'Password'};
console.log(user, userWPass);


const user2 = {id: 200, surname: 'Pepito Grillo'};

const users = {...user, ...user2};
console.log(users);