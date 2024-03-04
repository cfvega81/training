const btnPower = document.querySelector('button.power');
const btnInc = document.querySelector('button.inc');
const btnDec = document.querySelector('button.dec');
const btnMode = document.querySelector('button.mode');

const panelRoom = document.querySelector('.panel.room');
const bRoom = panelRoom.querySelector('b');

const panelDisplay = document.querySelector('.panel.display');
const tdPower = panelDisplay.querySelector('td.power');
const tdTemp = panelDisplay.querySelector('td.temp');
const tdMode = panelDisplay.querySelector('td.mode');


const panelActions = document.querySelector('.panel.actions');
const ulActions = panelActions.querySelector('ul'); 

const urlBase = 'http://localhost:3000';