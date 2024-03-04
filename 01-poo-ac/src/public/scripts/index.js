btnPower.addEventListener('click', async () => {
    const isOn = btnPower.classList.contains('btn-success');
    await fetch(`${urlBase}/api/${isOn ? 'off': 'on' }`, { method: 'POST'} );
});

btnInc.addEventListener('click', async () => {
    await fetch(`${urlBase}/api/inc`, { method: 'POST'} );
});

btnDec.addEventListener('click', async () => {
    await fetch(`${urlBase}/api/dec`, { method: 'POST'} );
});

btnMode.addEventListener('click', async () => {
    await fetch(`${urlBase}/api/mode`, { method: 'POST'} );
});