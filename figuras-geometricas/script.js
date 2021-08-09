const btnSquare = document.querySelector("#btn-square");
const btnTriangle = document.querySelector("#btn-triangle");
const btnCircle = document.querySelector("#btn-circle");
const btnTriangleIsosceles = document.querySelector("#btn-triangle-isosceles");

btnSquare.addEventListener("click", printDataSquare);
btnTriangle.addEventListener("click", printDataTriangle);
btnCircle.addEventListener("click", printDataCircle);
btnTriangleIsosceles.addEventListener("click", printDataTriangleIsosceles);

function printDataSquare() {
  const inputSideSquare = document.querySelector('input[name="ladoCuadrado"]');
  const divResultsSquare = document.querySelector("#card-results__square");

  const sizeSideSquare = Number(inputSideSquare.value);
  const perimeter = sizeSideSquare * 4;
  const area = sizeSideSquare * sizeSideSquare;

  divResultsSquare.innerHTML = `<p>El Perimetro es: <em>${perimeter}</em> y el Área es: <em>${area}</em></p>`;
}

function printDataTriangle() {
  const divResultsTriangle = document.querySelector("#card-results__triangle");
  const inputLado1Triangle = document.querySelector('input[name="lado1"]');
  const inputLado2Triangle = document.querySelector('input[name="lado2"]');
  const inputLadoBaseTriangle = document.querySelector(
    'input[name="ladoBase"]'
  );
  const inputAlturaTriangle = document.querySelector('input[name="altura"]');

  const sizeSide1Triangle = Number(inputLado1Triangle.value);
  const sizeSide2Triangle = Number(inputLado2Triangle.value);
  const sizeSideBaseTriangle = Number(inputLadoBaseTriangle.value);
  const sizeHeightTriangle = Number(inputAlturaTriangle.value);

  const perimeter =
    sizeSide1Triangle + sizeSide2Triangle + sizeSideBaseTriangle;
  const area = (sizeSideBaseTriangle * sizeHeightTriangle) / 2;

  divResultsTriangle.innerHTML = `<p>El Perimetro es: <em>${perimeter}</em> y el Área es: <em>${area}</em></p>`;
}

function printDataCircle() {
  const divResultsCircle = document.querySelector("#card-results__circle");
  const inputRadiusCircle = document.querySelector('input[name="radius"]');

  const sizeRadiusCircle = Number(inputRadiusCircle.value);
  const diameter = sizeRadiusCircle * 2;

  const perimeter = (Math.PI * diameter).toFixed(2);
  const area = (Math.PI * sizeRadiusCircle ** 2).toFixed(2);

  divResultsCircle.innerHTML = `<p>El Perimetro es: <em>${perimeter}</em> y el Área es: <em>${area}</em></p>`;
}

function printDataTriangleIsosceles() {
  const divResultsTriangleIsosceles = document.querySelector(
    "#card-results__triangle-isosceles"
  );
  const inputSideTriangle = document.querySelector(
    'input[name="lado1Isosceles"]'
  );
  const inputSide2Triangle = document.querySelector(
    'input[name="lado2Isosceles"]'
  );
  const inputSide3Triangle = document.querySelector(
    'input[name="lado3Isosceles"]'
  );

  const sizeSide1Triangle = Number(inputSideTriangle.value);
  const sizeSide2Triangle = Number(inputSide2Triangle.value);
  const sizeSide3Triangle = Number(inputSide3Triangle.value);

  if (sizeSide1Triangle !== sizeSide2Triangle)
    return alert("Los lados deben ser iguales 😢");

  const baseTriangle = sizeSide3Triangle / 2;
  const height = Math.sqrt(sizeSide1Triangle ** 2 - baseTriangle ** 2);

  const perimeter = sizeSide1Triangle + sizeSide2Triangle + sizeSide3Triangle;
  const area = (sizeSide3Triangle * height) / 2;

  divResultsTriangleIsosceles.innerHTML = `<p>El Perimetro es: <em>${perimeter}</em> y el Área es: <em>${area}</em></p>`;
}
