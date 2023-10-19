const korz = document.querySelector('.btn-circle-korz');
const korzina = document.querySelector('.korzina');
let count = 0;
const newEls = (count) => {
    return `<div class="element-korz">
                <button type="button" class="btn" id="btn2">-</button>
                <p id="count">${String(count).trim().replace('-', '')}</p>
                <button type="button" class="btn" id="btn1">+</button>
            </div>`
}
korz.addEventListener('click', () => {
    count++;
    const newEl1 = newEls(count);
    korz.outerHTML = '';
    korzina.insertAdjacentHTML('beforeend', newEl1);

    const btnMinus = document.querySelector('.element-korz').querySelector('#btn2')
    const btnPlus = document.querySelector('.element-korz').querySelector('#btn1')

    const countEl = document.getElementById('count');
    const priceEl = document.getElementById('price');
    // let count = Number(countEl.innerText);
    let price = Number(priceEl.innerText.replace('Руб.', ''));
    let priceOneEl = price / count;

    btnPlus.addEventListener('click', () => {
        countEl.innerText = ++count;
        priceEl.innerText = priceOneEl * count + ' Руб.';
    })
    btnMinus.addEventListener('click', () => {
        countEl.innerText = count === 1 ? '1' : --count;
        priceEl.innerText = priceOneEl * count + ' Руб.';
    })
});

