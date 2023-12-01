const products = [
    {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',
        discount: '-40%',
        image: 'assets/images/products/joystick.png',
        iconDelete: 'assets/images/svg/icon-delete.svg',
        textLayer: 'Add To Cart',
        price: 120,
        disPrice: "$160",
        comments: 88
    },
    {
        id: 2,
        name: 'AK-900 Wired Keyboard',
        discount: '-35%',
        image: 'assets/images/products/keyboard.png',
        iconDelete: 'assets/images/svg/icon-delete.svg',
        textLayer: 'Add To Cart',
        price: 960,
        comments: 75
    },
    {
        id: 3,
        name: 'IPS LCD Gaming Monitor',
        discount: '-30%',
        image: 'assets/images/products/tv.png',
        iconDelete: 'assets/images/svg/icon-delete.svg',
        textLayer: 'Add To Cart',
        price: 370,
        comments: 99
    },
    {
        id: 4,
        name: 'S-Series Comfort Chair',
        discount: '-25%',
        image: 'assets/images/products/chair.png',
        iconDelete: 'assets/images/svg/icon-delete.svg',
        textLayer: 'Add To Cart',
        price: 375,
        comments: 99
    }


]
const recommendPrContainer = [
    {
        id: 1,
        name: 'Bestselling-Coat',
        image: 'assets/images/products/coat.png',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 260,
        discount: '-25%',
        disPrice: "$360",
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-fill.svg',
        comments: 66
    },
    {
        id: 2,
        name: 'Gucci duffle bag',
        image: 'assets/images/products/bag.png',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 960,
        disPrice: "$1160",
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-half-filled.svg',
        comments: 65
    },
    {
        id: 3,
        name: 'RGB liquid CPU Cooler',
        image: 'assets/images/products/gammaxx.png',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 160,
        disPrice: '$170',
        discount: '-25%',
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-half-filled.svg',
        comments: 65
    },
    {
        id: 4,
        name: 'Small BookSelf',
        image: 'assets/images/products/shelf.png',
        imgEye: 'assets/images/svg/eye.svg',
        textLayer: 'Add To Cart',
        price: 360,
        imgStar: 'assets/images/svg/star-fill.svg',
        imgEmptyStar: 'assets/images/svg/star-fill.svg',
        comments: 65
    }
];

const wishlistMap = (products) => {

    return products.map((item) => {

        return `        <div class="products-container "data-id="${item.id}">
    <div class="products bg-solid-secondary mx-1 my-2 d-flex-container position-relative">
   <img src=${item.image} alt="">
        <div class="product-icons  position-absolute d-flex ${item.discount ? 'justify-content-between' : 'justify-content-end'} w-100">
<span class="${item.discount ? 'discount-product text-center text-white fs-12 ms-2' : 'd-none'} ${item.disPrice ? 'bg-light-orange' : ''} ">${item.discount}</span>
            <div class="me-2">
                <span class="mb-1 icon-bg-rounded bg-white rounded-circle d-flex-container">
                 <img src=${item.iconDelete ? item.iconDelete : item.imgEye} alt="img">
                </span>
            </div>
        </div>
        <div class="layer text-white">${item.textLayer}</div>
    </div>
    <p>${item.name}</p>
    <span class="text-danger me-2">$${item.price}</span><span
        class="text-secondary text-decoration-line-through">${item.disPrice ? item.disPrice : ''}</span>
        <div class=${item.imgStar ? "d-block" : "d-none"}>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgStar} alt=""></span>
        <span><img src=${item.imgEmptyStar ? item.imgEmptyStar : item.imgStar} alt=""></span>
        <span class="fs-14">(${item.comments})</span>
    </div>
    </div>`

    }).join("")


}


const wishListContainer = document.getElementById('wishListContainer');
const recommendProducts = document.getElementById('recommendProducts');


// products to product section
const product = wishlistMap(products);
const recommendProduct = wishlistMap(recommendPrContainer);

if (wishListContainer) {
    wishListContainer.innerHTML = product;

}
if (recommendProducts) {
    recommendProducts.innerHTML = recommendProduct;

}


