// Mahsulot nomi - ?
// Mahsulot miqdori - ?
// Mahsulot narxi - ?
// yana Mahsulot qo'shasizmi?
// MAHSULOTLAR HAMMASINI NARXINI CHIQARISH TOTAL PRICE

// MAHSULOT MA'LUMOTINI OLISH MAIN QISM
function getInfo(username, products) {
  const product = {};
  const productName = prompt("Mahsulot nomi?");
  if (!productName || productName.length == 0 || productName == undefined) {
    alert("To'g'ri nom kiriting!");
  }
  product.name = productName;
  const productWeight = +prompt("Mahsulot miqdori?");
  if (isNaN(productWeight)) {
    alert("Miqdorni to'g'ri kiriting!");
  }
  product.weight = productWeight;
  const productPrice = +prompt("Mahsulot narxi?");
  if (isNaN(productPrice)) {
    alert("Narxni to'g'ri kiriting!");
  }
  product.price = productPrice;
  alert(`Mahsulot: ${JSON.stringify(product)}`);
  products.push(product);
  const confirmation = confirm(`${username}, siz yana mahsulot olishni xohlaysizmi?`);
  if (confirmation) {
    getInfo(username, products)
  }
  else{
  CalcPrice(products)
  }
}

// WELCOMING PART KUTIB OLISH MIJZONI
function Sales(callback) {
  alert(`Assalomu alaykum Bizning do'konimizga xush kelibsiz:)`);
  const userName = prompt("Ismingiz?");
  const products = [];
  const confirmation = confirm(`${userName}, siz mahsulot olishni xohlaysizmi?`);
  if (confirmation) {
    const product = callback(userName, products);
    products.push(product);
  }
  else{
    alert("DO'KONIMIZGA TASHRIFINGIZDAN XURSANDMIZ!")
  }
}
// MAHSULOTLAR NARXINI HISOBLAB MIJOZGA YUBORISH 
function CalcPrice(products){
    sum = 0
  for(let product of products){
    sum = sum + product.price * product.weight
  }
  let productNames = products.map(p => `${p.name} (${p.weight} dona x ${p.price} so'm)`).join(", ");
  alert(`Sotib olinayotgan mahsulotlar: ${JSON.stringify(products)}`);
  alert(`JAMI SUMMA ${sum} kassaga to'lov qilishingiz mumkin`)
}
alert(Sales(getInfo))
