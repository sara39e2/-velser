//https://kea-alt-del.dk/t7/api/products

//1 hente data
async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products");
  const data = await response.json();
  console.log("hej");
  //2 loope//3 for hver af dem
  data.forEach(showProduct);
}

getData();

function showProduct(product) {
  console.log(product);
  //4 fange vores template

  const template = document.querySelector("#smallProductTemplate").content;
  //5 clone
  const copy = template.cloneNode(true);

  //6 skifte data
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".subtle").textContent = product.articletype;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("a").href = "produkt.html?id=" + product.id;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.onsale) {
    copy.querySelector("article").classList.add("onSale");
  }
  //7 appende
  document.querySelector("main").appendChild(copy);
}
