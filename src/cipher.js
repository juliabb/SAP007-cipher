const cipher = {
  encode: function (offset, string) {

    let textCode = "";

    for (let i = 0; i < string.length; i++) {
      let cifrar = string.charCodeAt(i);
      if (cifrar >= 65 && cifrar <= 90) {
        textCode += String.fromCharCode(((cifrar - 65 + offset) % 26) + 65);
      } else if (cifrar == 32) {
        textCode += textCode.charAt(i);
      }
    }
    return textCode;
  },

  decode: function (offset, string) {

    let textDecode = "";

    for (let i = 0; i < string.length; i++) {
      //laço para continuar enquanto ouver letras
      let decifrar = string.charCodeAt(i);
      if (decifrar >= 65 && decifrar <= 90) {
        textDecode += String.fromCharCode(((decifrar - 65 - offset) % 26) + 65);
      } else if (decifrar == 32) {
        textDecode += textDecode.charAt(i);
      }
    }
    return textDecode;
  },
};

export default cipher;

/* let answerCifra = ""; // lugar onde vai aparecer a resposta
let deslocamento = document.getElementById('offset_1');

let quantiLetras = mensagemCifra.length; // lendo a quantidade de letra - length é leitura
for (let i = 0; quantiLetras > i; i++) {
  let codigoAsc = mensagemCifra.charCodeAt(i);
  
  let encodeValue =
  ((codigoAsc - valorLetraAsc + deslocamento) % 26) + codigoAsc;
  answerCifra = answerCifra.concat(mensagemCifra.fromCharCode(encodeValue));
}

Código ASC - A = 65 .... Z = 90
        ((codigoDaLetraASC - cod1Letra + desloc) % tamAlfabeto) + cod1Letra

        codigoASC => codigo0a25 => desloco => giro (loop) => codigoASC 
    
      cipher.encode(offset, string): offset é o número de posições que queremos mover para a direita no alfabeto e string é a mensagem (texto) que queremos cifrar.

*/
