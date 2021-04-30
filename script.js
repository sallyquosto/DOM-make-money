const quantity = document.getElementById('quantity');
const coinType = document.getElementById('coin');

function remove(e) {
    console.log(e.target);
    e.target.remove();
}

function addCoin(e) {
    e.preventDefault();
    for (let i = 0; i < quantity.value; i++) {
        const coinElement = document.createElement('div');
        coinElement.style.borderRadius = '100%';
        coinElement.style.textAlign = 'center';
        const cType = coinType.value;
        switch (cType) {
            case 'penny':
                coinElement.style.width = '50px';
                coinElement.style.height = '50px';
                coinElement.style.backgroundColor = 'brown';
                coinElement.innerText = 'penny';
                break;
            case 'nickel':
                coinElement.style.width = '80px';
                coinElement.style.height = '80px';
                coinElement.style.backgroundColor = 'grey';
                coinElement.innerText = 'nickel';
                break;   
            case 'dime':
                coinElement.style.width = '30px';
                coinElement.style.height = '30px';
                coinElement.style.backgroundColor = 'grey';
                coinElement.innerText = 'dime';
                break;
            case 'quarter':
                coinElement.style.width = '100px';
                coinElement.style.height = '100px';
                coinElement.style.backgroundColor = 'grey';
                coinElement.innerText = 'quarter';
                break;
        }
        document.getElementById('coin-container').append(coinElement);
    }
}