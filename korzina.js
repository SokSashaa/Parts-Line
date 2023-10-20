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
const lik = jsonObj["items"];



window.addEventListener('load', () => {
    if (localStorage.getItem("korzina") != null) {

        const oldEl = document.querySelector(".main");
        const newEl = document.createElement("div");
        newEl.classList.add("main1");
        oldEl.replaceWith(newEl);
        const newEls = (count, desc, img) => {
            return `<div class="row1">
                <div class="icon-pr" style="background: url('${img}');background-position: center; background-size: cover;" ></div>
                <div class="description">${desc}</div>
                <div class="element-korz1">
                    <button type="button" class="btn" id="btn2">-</button>
                    <p id="count">1</p>
                    <button type="button" class="btn" id="btn1">+</button>
                </div>
                <div class="count">${count} Руб.</div>
            </div>`
        }

        const arr = localStorage.getItem("korzina").split(",");
        arr.forEach((item, index) => {
            console.log(item);
            console.log(lik[`${item}`]);
            const desc = lik[`${item}`]["description"];
            const img = lik[item]["img"];
            const count = lik[item]["price"];
            const el = newEls(count, desc, img);
            newEl.insertAdjacentHTML('beforeend', el);
        });

    }
});