const btnCalculate = document.querySelector("#btn-calcular");
const cupons = [
  {
    name: "platzi",
    discount: 10,
  },
  {
    name: "javascript",
    discount: 15,
  },
  {
    name: "platzi+",
    discount: 50,
  },
];

btnCalculate.addEventListener("click", getPriceWithDiscount);

function getPriceWithDiscount() {
  const inputPrice = document.querySelector('input[name="price"]');
  const inputDiscount = document.querySelector('input[name="discount"]');
  const inputCupon = document.querySelector('input[name="cupon"]');
  const resultadosContainer = document.querySelector("#resultados");

  const price = Number(inputPrice.value);
  const percentDiscount = Number(inputDiscount.value);
  const coupon = inputCupon.value;

  const discountCoupon = getDiscountCoupon(coupon);

  const discount = getDiscount(price, percentDiscount + discountCoupon);
  const totalPrice = price - discount;

  resultadosContainer.innerHTML = `<p>El precio del producto con un descuento de <strong>${percentDiscount}%</strong> 
  es de: <strong>${totalPrice}</strong></p>`;
}

function getDiscount(price, discount) {
  return (price * discount) / 100;
}

function getDiscountCoupon(cuponName) {
  if (!cuponName) return 0;

  const cuponDiscount = cupons.filter((cupon) => cupon.name == cuponName);

  if (!cuponDiscount.length) {
    alert("El cupón no es valido 😭");
    return 0;
  }

  alert("Se aplica un descuento por el cupón 🥳");
  return cuponDiscount[0].discount;
}
