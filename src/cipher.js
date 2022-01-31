
const cipher = {
  encode (offset,  string) {
    let text = ""; 
    let quantiLetras = string.length
    for (let i = 0; i < quantiLetras.length; i++) {
      let codigoAsc = element.charCodeAt(i); //código asc 65 - 90
      let encodeValue = ((codigoAsc - 65 + offset)) % 26 + 65; //lógica da cifra, aqui a letra está em 0 - 25
      let text = text.concat(String.fromCharCode(encodeValue)); //aqui ele transforma em letra no metodo ASC 

    }
      return text; 
    console.log(text);
  }
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
*/


/*    Código ASC - A = 65 .... Z = 90
        ((codigoDaLetraASC - cod1Letra + desloc) % tamAlfabeto) + cod1Letra

        codigoASC => codigo0a25 => desloco => giro (loop) => codigoASC 
    
      cipher.encode(offset, string): offset é o número de posições que queremos mover para a direita no alfabeto e string é a mensagem (texto) que queremos cifrar.

*/