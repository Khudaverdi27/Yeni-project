
import { updateCount } from "./cart.js";
import { getStorage } from "./login.js";
import { setLocale, updateBadge } from "./navbar.js";

const ui = {
    minusBtn: document.getElementById('minus-btn'),
    plusBtn: document.getElementById('plus-btn'),
    count: document.getElementById('count-box')
}


ui.minusBtn?.addEventListener('click', function () {
    updateCount('decrease', ui.count);

});

ui.plusBtn?.addEventListener('click', function () {
    updateCount('increase', ui.count);

});



const detailFromStorage = JSON.parse(getStorage("details")) || [];

const setElementText = (elementId, text) => document.getElementById(elementId).textContent = text;

const setElementSrc = (selector, src) => document.querySelectorAll(selector).forEach(el => el.src = src);

const sizeContainer = document.getElementById("sizeContainer");

if (sizeContainer) {
    setElementText("detail--name", detailFromStorage.name);
    setElementText("detail--title", detailFromStorage.name);
    setElementText("detail-category", detailFromStorage.category + "/");
    setElementText("detail--desc", detailFromStorage.description);
    setElementText("detail--price", "$" + detailFromStorage.price + ".00");

    setElementSrc(".img-w", detailFromStorage.image);
    setElementSrc(".slide-img", detailFromStorage.image);

    const sizeHTML = detailFromStorage.size ? `
        <span class="fs-4">Size:</span>
        <button class="btn btn-sm border border-2 box-btn fw-bold">XS</button>
        <button class="btn btn-sm border border-2 box-btn fw-bold mx-1">S</button>
        <button class="btn btn-sm border border-2 box-btn fw-bold">M</button>
        <button class="btn btn-sm border border-2 box-btn fw-bold mx-1">L</button>
        <button class="btn btn-sm border border-2 box-btn fw-bold">XL</button>
    ` : "";

    sizeContainer.innerHTML = sizeHTML;
}

let boolean = window.location.search.startsWith('?true');

const addWish = document.getElementById("addDetailWishlist")
if (!boolean && addWish) {
    addWish.style.cursor = "not-allowed";
    addWish.setAttribute("disabled", true);
} else {
    addWish?.addEventListener("click", () => {
        const hasBgWhiteClass = addWish.classList.contains('bg-white');

        // Toggle background color class
        addWish.classList.remove(hasBgWhiteClass ? 'bg-white' : 'bg-danger');
        addWish.classList.add(hasBgWhiteClass ? 'bg-danger' : 'bg-white');

        setLocale(detailFromStorage, detailFromStorage.id)
        updateBadge()
    })
}




document.getElementById("buyFromDetail")?.setAttribute("href", `${boolean ? "check-out.html" + "?" + "true" : "sign-Up.html"}`)


