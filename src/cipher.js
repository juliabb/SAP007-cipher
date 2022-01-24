const alfabeto =[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];

//cipher.encode(offset, string): offset é o número de posições que queremos mover para a direita no alfabeto e string é a mensagem (texto) que queremos cifrar.

const cipher = {
  encode (offset_1, mensagemCrip){

    let input = document.getElementById("textCifra").value.toUpperCase(); //transformando o texto em MAIUSCULA - value é o value inserido pelo usuario

    let answerCifra = ""; // lugar onde vai aparecer a resposta


    /* Código ASC - A = 65 .... Z = 90  ((codigoDaLetraASC - cod1Letra + desloc) % tamAlfabeto) + cod1Letra

    codigoASC => codigo0a25 => desloco => giro (loop) => codigoASC */

    for (var i=0; i<input.length; i++){
      let codigoAsc = 
    }

  }
  
};

export default cipher;
