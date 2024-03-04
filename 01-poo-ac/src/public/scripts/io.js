const ioRoom = io.connect(`${urlBase}/room`);
const ioDisplay = io.connect(`${urlBase}/display`);
const ioActions = io.connect(`${urlBase}/actions`);

const icons = {
    'up': 'fa-solid fa-arrow-up',
    'middle': 'fa-solid fa-arrow-left',
    'down': 'fa-solid fa-arrow-down',
    'spin': 'fa-solid fa-arrows-spin'
};

ioRoom.on('message', (msg) => {
    bRoom.textContent = msg;
});

ioDisplay.on('message', (msg) => {
    console.log(msg);
    if (msg.power) {
        btnPower.classList.remove('btn-danger', msg.power);
        btnPower.classList.add('btn-success', msg.power);
    } else {
        btnPower.classList.remove('btn-success', msg.power);
        btnPower.classList.add('btn-danger', msg.power);
    }

    const icon = btnMode.querySelector('i');
    icon.className = icons[msg.mode];

    tdPower.textContent = msg.power ? 'On' : 'Off';
    tdTemp.textContent = msg.temperature;
    tdMode.textContent = msg.mode;
});

ioActions.on('message', (msg) => {
    ulActions.innerHTML += `<li class="list-group-item">${msg}</li>`;

    if (ulActions.children.length > 10) {
        ulActions.removeChild(ulActions.children[0]);
    }   
});
