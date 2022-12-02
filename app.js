import products from "./products.json" assert { type: "json" };

products.map((product) => console.log(product.title));
