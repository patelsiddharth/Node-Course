// connect to server
const server = io()

const countDiv = document.querySelector('#count')
server.on('CountUpdated', (count) => {
    console.log(`Count Updated : ${count}`)
    countDiv.innerHTML = count;
})


const incbtn = document.querySelector('#inc')
incbtn.addEventListener('click', () => {
    server.emit('IncrementCount');
})

server.on('WelcomeMessage', (msg) => {
    countDiv.innerHTML = msg;
    console.log(msg);
})

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => 
{
    e.preventDefault();
    const message = e.target.elements.message.value;
    server.emit('Message', message);
})

server.on('MessageAlert', (msg) => {
    console.log(msg);
})