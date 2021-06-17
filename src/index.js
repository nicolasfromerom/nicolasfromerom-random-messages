const messages = [
    "Nicolas","Fabricio","Luz", "Belem","Luana","Greta",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()* messages.length)];
    console.log(message);
}

module.exports = { randomMsg };