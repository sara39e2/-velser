const id = 1533;
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("#model").textContent = produkt.productdisplayname;
  document.querySelector("#type").textContent = produkt.price;
  document.querySelector("#color").textContent = produkt.basecolour;
  document.querySelector("img").src = imagePath;
}

hentData();
