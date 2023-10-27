
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

// пагинация

const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const listItemsInArray = jsonObj["items"];
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 3;
const pageCount = Math.ceil(listItemsInArray.length / paginationLimit);
let currentPage;

const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
        disableButton(prevButton);
    } else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
};

const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    });
};

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};

const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;
    paginatedList.innerHTML = '';
    listItemsInArray.forEach((item, index) => {
        const el = document.createElement("li");

        el.innerHTML = `<div class="row">
          <div class="icon-product">
            <img src="${jsonObj["items"][index]["img"]}">
            <p>${jsonObj["items"][index]["price"]} Руб.</p>
          </div>
          <div class="describtion">
            <p class="title-describtion" id=${index}>${jsonObj["items"][index]["description"]}</p>
          </div>
        </div>`;

        el.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
            el.classList.remove("hidden");
            paginatedList.appendChild(el);
        }
    });
    const prod = document.querySelectorAll('.title-describtion');
    prod.forEach(element => {
        element.addEventListener('mouseover', () => {
            document.documentElement.style.cursor = "pointer";
        });
        element.addEventListener('mouseout', () => {
            document.documentElement.style.cursor = "default";
        });
        element.addEventListener('click', (e) => {
            location.href = `Product.html?article=${e.target.id}`;
        });
    });

};

window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });
});

// конец пагинации
