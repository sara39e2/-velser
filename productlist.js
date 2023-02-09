//https://kea-alt-del.dk/t7/api/products

const urlParams = new URLSearchParams(window.location.search);
const kat = urlParams.get("kat");

const url = `https://kea-alt-del.dk/t7/api/products?limit=20&category=${kat}`;

const skabelon = document.querySelector("template").content;
const container = document.querySelector("main");

document.querySelector("h2").textContent = kat;

//1 hente data
async function getData() {
  const response = await fetch(url);
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

  copy.querySelector(".price").textContent = product.price;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    console.log(product);
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p").textContent = Math.round(product.price - (product.price * product.discount) / 100);
    copy.querySelector(".discounted p+p").textContent = product.discount + "%";
  }

  //7 appende
  document.querySelector("main").appendChild(copy);
}
