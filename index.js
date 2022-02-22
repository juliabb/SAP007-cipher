import cipher from "./cipher.js";

const botaoCifra = document.getElementById("buttonCipher");
const botaoDecifra = document.getElementById("buttonDecipher");

function buttonCipher(e) {
  e.preventDefault();
  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("text").value;
  const resultadoCifra = cipher.encode(offset, string);
  document.getElementById("answers").innerHTML = resultadoCifra;
}

function buttonDecipher(e) {
  e.preventDefault();
  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("text").value;
  const resultadoDecifra = cipher.decode(offset, string);
  document.getElementById("answers").innerHTML = resultadoDecifra;
}

botaoCifra.addEventListener("click", buttonCipher);
botaoDecifra.addEventListener("click", buttonDecipher);
