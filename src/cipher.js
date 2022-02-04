const cipher = {
  encode: function (offset, string) {
    let textCode = "";

    for (let i = 0; i < string.length; i++) {

      let cifrar = string.charCodeAt(i); //variavel que recebe a string

      if (cifrar >= 65 && cifrar <= 90) {
        textCode += String.fromCharCode(((cifrar - 65 + offset) % 26) + 65); // letras maiusculas
      } else if (cifrar >= 97 && cifrar <= 122) {
        textCode += String.fromCharCode(((cifrar - 97 + offset) % 26) + 65); // minusculas
      } else if (cifrar >= 33 && cifrar <= 47) {
        //caracteres especiais
        textCode += string.charAt(i);
      } else if (cifrar >= 58 && cifrar <= 64) {
        //pontos
        textCode += string.charAt(i);
      } else if (cifrar >= 91 && cifrar <= 96) {
        textCode += string.charAt(i);

      } else if (cifrar >= 123 && cifrar <= 254) {
        textCode += string.charAt(i);

      } else if (cifrar == 32) {
        textCode += string.charAt(i);
      }
    }
    return textCode;
  },

  decode: function (offset, string) {
    let textDecode = "";

    for (let i = 0; i < string.length; i++) {
      //laço para continuar enquanto ouver letras
      let decifrar = string.charCodeAt(i); //decifrar recebe a string em ASCII
      if (decifrar >= 65 && decifrar <= 90) {
        // se decifrar for maior ou igual a 65 e menor ou igual a 90
        textDecode += String.fromCharCode(((decifrar - 65 - offset) % 26) + 65); //concatena (+=) a String

      } else if (decifrar >= 97 && decifrar <= 122) {
        textDecode += String.fromCharCode(((decifrar - 97 - offset) % 26) + 65);

      } else if (decifrar >= 33 && decifrar <= 47) {
        textDecode += string.charAt(i);

      } else if (decifrar >= 58 && decifrar <= 64) {
        textDecode += string.charAt(i);

      } else if (decifrar >= 91 && decifrar <= 96) {
        textDecode += string.charAt(i);

      } else if (decifrar >= 123 && decifrar <= 254) {
        textDecode += string.charAt(i);
        
      } else if (decifrar == 32) {
        //se o decifrar for igual a 32 (no código asc é o espaço)
        textDecode += string.charAt(i); //o texto mantem (no caso mantem o espaço)
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
