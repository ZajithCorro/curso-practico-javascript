const formNuevoNumero = document.querySelector("#form-nuevo-numero");

formNuevoNumero.addEventListener("submit", handleSubmit);

let numbers = [];

function handleSubmit(event) {
  event.preventDefault();

  const resultados = document.querySelector(".resultados");
  const form = new FormData(this);
  const numero = Number(form.get("nuevoNumero"));

  if (!numero) return alert("Solo se pueden ingresar números 😓");

  addNumber(numero);
  formNuevoNumero.reset();

  resultados.innerHTML = `<p>El promedio es: <strong>${getAverage(
    numbers
  )}</strong>
  </p><p>La moda es: <strong>[${getFrequency(numbers)}]</strong></p>
  </p><p>La mediana es: <strong>${getMedian(numbers)}</strong></p>`;
}

function addNumber(numero) {
  numbers.push(numero);
  const textArea = document.querySelector("#lista-numeros");
  textArea.innerHTML = `[${numbers}]`;
}

function getAverage(numbersList) {
  const totalSum = numbersList.reduce((prev, current) => prev + current, 0);

  return (totalSum / numbersList.length).toFixed(2);
}

function getFrequency(numbersList) {
  let dict = {};

  for (let number of numbersList) {
    if (number in dict) {
      ++dict[number];
    } else {
      dict[number] = 1;
    }
  }

  const maxFrequency = Math.max(...Object.values(dict));
  const maxFrequencyNumbers = Object.keys(dict).filter(
    (key) => dict[key] === maxFrequency
  );

  return maxFrequencyNumbers;
}

function getMedian(numbersList) {
  const sortedList = numbersList.sort((a, b) => a - b);

  const middleIndex = Math.floor(numbersList.length / 2);
  const isEven = numbersList.length % 2 == 0 ? true : false;

  if (isEven) {
    const values = [sortedList[middleIndex], sortedList[middleIndex] - 1];
    return getAverage(values);
  } else {
    return sortedList[middleIndex];
  }
}
