const btnCalculate = document.querySelector("#btn-calcular");

btnCalculate.addEventListener("click", getPriceWithDiscount);

function getPriceWithDiscount() {
  const inputPrice = document.querySelector('input[name="price"]');
  const inputDiscount = document.querySelector('input[name="discount"]');
  const resultadosContainer = document.querySelector("#resultados");

  const price = Number(inputPrice.value);
  const percentDiscount = Number(inputDiscount.value);

  const discount = getDiscount(price, percentDiscount);
  const totalPrice = price - discount;

  resultadosContainer.innerHTML = `<p>El precio del producto con un descuento de <strong>${percentDiscount}%</strong> 
  es de: <strong>${totalPrice}</strong></p>`;
}

function getDiscount(price, discount) {
  return (price * discount) / 100;
}
