/*    Código ASC - A = 65 .... Z = 90
        ((codigoDaLetraASC - cod1Letra + desloc) % tamAlfabeto) + cod1Letra

        codigoASC => codigo0a25 => desloco => giro (loop) => codigoASC 
    
      cipher.encode(offset, string): offset é o número de posições que queremos mover para a direita no alfabeto e string é a mensagem (texto) que queremos cifrar.

*/

const cipher = {
  encode(offset_1, mensagemCifra) {
    let answerCifra = ""; // lugar onde vai aparecer a resposta
    let deslocamento = document.getElementById('offset_1');

    let quantiLetras = mensagemCifra.length; // lendo a quantidade de letra - length é leitura
    for (let i = 0; quantiLetras > i; i++) {
      let codigoAsc = mensagemCifra.charCodeAt(i); 
      let encodeValue =
        ((codigoAsc - valorLetraAsc + deslocamento) % 26) + codigoAsc;
      answerCifra = answerCifra.concat(mensagemCifra.fromCharCode(encodeValue));
    }
    console.log(answerCifra);
  },
};

export default cipher;
