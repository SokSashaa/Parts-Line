
const js = `{
    "arrayProducts": [],
    "items": [
        {
            "article": "00001",
            "name": "Idemitsu",
            "img": "Files/oil-idemitsu.png",
            "price": "3969",
            "description": "Моторное масло Idemitsu Gasoline & Diesel Fully-Synthetic SN/CF 30015048-746 5W40 4"
        },
        {
            "article": "00002",
            "name": "Лукойл",
            "img": "Files/oil-lukoil.png",
            "price": "3999",
            "description": "Моторное масло Lukoil Genesis Armortech 5W-40 4л. 3148675"
        },
        {
            "article": "00003",
            "name": "Sintec",
            "img": "Files/oil-sintec.png",
            "price": "1684",
            "description": "Моторное масло SINTEC PLATINUM SAE 5W-30 API SL, ACEA A5/B5 Синтетическое 4 л"
        },
        {
            "article": "00004",
            "name": "Zic",
            "img": "Files/oil-zic.png",
            "price": "1130",
            "description": "Моторное масло ZIC X9 5W40 синтетика 4 л 162000"
        },
        {
            "article": "00005",
            "name": "Газпромнефть",
            "img": "Files/oil-gazprom.png",
            "price": "1800",
            "description": "Моторное масло Gazpromneft Premium N 5W-40, 4л"
        },
        {
            "article": "00006",
            "name": "Quartz",
            "img": "Files/oil-quarts.png",
            "price": "1599",
            "description": "Моторное масло QUARTZ FUTURE NFC 9000 5W30 синт.1л TOTAL"
        },
        {
            "article": "00007",
            "name": "Zic",
            "img": "Files/oil-zic1.png",
            "price": "2199",
            "description": "Моторное масло ZIC Х5 10W40 4 л"
        },
        {
            "article": "00008",
            "name": "Kixx",
            "img": "Files/oil-kixx.png",
            "price": "3203",
            "description": "Моторное масло Kixx G1 SP 5W30 4 л, L215344TE1"
        },
        {
            "article": "00009",
            "name": "Quartz",
            "img": "Files/oil-elf.png",
            "price": "5190",
            "description": "Моторное масло Elf Evolution 900 SXR 194878 5W40 4 л"
        }
    ]
}`;
const jsonObj = JSON.parse(js);


window.addEventListener('load', () => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('article')) {
        const index = searchParams.get('article');
        const lin = jsonObj["items"][index];

        const name = lin["name"].toUpperCase();
        const nameEl = document.querySelector(".titleH");
        nameEl.innerHTML = `Моторное масло ${name}`;

        const hrefImg = lin["img"];
        const img = document.querySelector(".icon-prod");
        img.style.background = `url('${hrefImg}')`;
        img.style.backgroundPosition = "center";
        img.style.backgroundSize = "cover";
        img.style.textAlign = "center";

        const priceHref = lin["price"];
        const pr = document.querySelector("#price");
        pr.innerHTML = `${priceHref} Руб.`;
    }

});

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


