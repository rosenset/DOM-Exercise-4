const form = document.getElementById('money-form');
const coinsArea = document.getElementById('coins-area');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let data = new FormData(form);

    let coinCount = parseInt(data.get('count'));

    for (let i = 0; i < coinCount; i++){
        let coin = document.createElement('div');
        coin.classList.add('coin');
        coin.innerText = data.get('coin');
        coinsArea.appendChild(coin);
    }
});

coinsArea.addEventListener('click', e=> {
    e.target.remove();
})