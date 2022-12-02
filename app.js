import products from "./products.json" assert {type: "json"};

const content = document.querySelector(".content");

function createItem(product) {
  return `<div class="product">
  <img src="${product.imageUrl}" >
  <h1 class="title">${product.title}</h1>
  <p class="price">$${product.price} Ron</p>
  </div>`;
}

products.map((item) => {
  content.innerHTML = content.innerHTML + createItem(item);
});
