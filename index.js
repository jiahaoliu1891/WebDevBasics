window.addEventListener('load', () => {
    const btn = document.getElementById('btn');
    console.log(btn);
    const list = document.getElementById('list');
    btn.addEventListener('click', (e) => {
        const inputTxt = document.getElementById('in').value;
        list.innerText = list.innerText + `<li>${inputTxt}</li>`;
    })

})