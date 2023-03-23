const words = ["perro", "oso", "elefante", "tigre", "elefante", "elefante", "jirafa", "antílope", "elefante", "erizo", "ornitorrinco", "ornitorrinco", "orangután", "ñandú", "unicornio", "ornitorrinco", "oso", "ornitorrinco", "ocelote"];

let currentWord = "";
let currentTimer = 0;
let timerInterval = null;

function startTimer() {
  currentTimer = 10; // 10 segundos
  timerInterval = setInterval(() => {
    currentTimer--;
    if (currentTimer < 0) {
      clearInterval(timerInterval);
      alert("¡Tiempo agotado! Has perdido");
      resetGame();
    } else {
      document.getElementById("timer").innerText = `Tiempo restante: ${currentTimer} segundos`;
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timer").innerText = "";
}

function resetGame() {
  resetTimer();
  currentWord = "";
  document.getElementById("input").value = "";
  alert("¡Juego terminado! Comenzaremos de nuevo.");
  // Preguntar al usuario la primera palabra
  const firstWord = prompt("Ingresa la primera palabra:");
  if (firstWord) {
    addWord(firstWord);
    startTimer();
  }
}

function isWordValid(word) {
  return (word.length > 0 && word.charAt(0) === currentWord.charAt(currentWord.length - 1) && !words.includes(word));
}

function addWord(word) {
  currentWord = word;
  words.push(word);
  document.getElementById("input").value = "";
}

function handleSubmit() {
  const input = document.getElementById("input");
  const word = input.value.toLowerCase().trim();

  if (currentWord === "" && word !== "") {
    // La primera palabra ingresada es válida
    addWord(word);
    startTimer();
  } else if (isWordValid(word)) {
    addWord(word);
    resetTimer();
    startTimer();
    alert(`¡Excelente! Has ingresado la palabra ${word}. Sigue así.`);
  } else if (words.includes(word)) {
    resetGame();
  } else {
    alert(`La palabra ${word} no es válida. Intenta de nuevo.`);
  }
}

document.getElementById("submit").addEventListener("click", handleSubmit);
  