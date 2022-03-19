import cipher from "./cipher.js";


const botaoCifra = document.getElementById("buttonCipher");
const botaoDecifra = document.getElementById("buttonDecipher");

botaoCifra.addEventListener("click", buttonCipher);
botaoDecifra.addEventListener("click", buttonDecipher);

function buttonCipher(e) {
  e.preventDefault();
  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("text-insert").value;
  const resultadoCifra = cipher.encode(offset, string);
  window.scrollBy(0, window.innerHeight);
  if (offset,string == null && offset,string == undefined && offset,string == 0){
    return alert('Necessário adicionar texto e deslocamento!! Verifique novamente.');
  } else {
  document.getElementById("result-show").innerHTML = resultadoCifra;
  }
}

function buttonDecipher(e) {
  e.preventDefault();
  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("text-insert").value;
  const resultadoDecifra = cipher.decode(offset, string);
  window.scrollBy(0, window.innerHeight);
  if (offset,string == null && offset,string == undefined && offset,string == 0){
    return alert('Necessário adicionar texto e deslocamento!! Verifique novamente.');
  } else {
  const shownResult = document.getElementById("result-show").innerHTML = resultadoDecifra;
  return shownResult.classList.add("open");
  }
}

