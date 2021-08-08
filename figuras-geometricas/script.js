const btnSquare = document.querySelector("#btn-square");
const btnTriangle = document.querySelector("#btn-triangle");
const btnCircle = document.querySelector("#btn-circle");

btnSquare.addEventListener("click", printDataSquare);
btnTriangle.addEventListener("click", printDataTriangle);
btnCircle.addEventListener("click", printDataCircle);

function printDataSquare() {
  console.log(".(");
  const inputSideSquare = document.querySelector('input[name="ladoCuadrado"]');
  const divResultsSquare = document.querySelector("#card-results__square");

  console.log(inputSideSquare);

  const sizeSideSquare = Number(inputSideSquare.value);
  const perimeter = sizeSideSquare * 4;
  const area = sizeSideSquare * sizeSideSquare;

  divResultsSquare.innerHTML = `<p>El Perimetro es: <em>${perimeter}</em> y el Área es: <em>${area}</em></p>`;
}

function printDataTriangle() {
  console.log("🥳");
}

function printDataCircle() {
  console.log("🥳");
}
