const cipher = {
    encode: function (offset, string) {
      if (offset == 0 || offset == null || offset == undefined) {
        throw new TypeError()     //Mensagem de erro 
      }
  
      let textCode = "";    //variavel da resposta
  
      for (let i = 0; i < string.length; i++) {     //loop para continuar enquanto houver letras
  
        let cifrar = string.charCodeAt(i);    //transforma o alfabeto padrao para o ASC (numero)
  
        if (cifrar >= 65 && cifrar <= 90) {   //ler apenas de A a Z maiusculas
          textCode += String.fromCharCode((cifrar - 65 + offset) % 26 + 65);     //calculo do deslocamento para cifrar
          //String.fromCharCode transforma o ASC em letra
  
        } else if (cifrar >= 97 && cifrar <= 122) {     // minusculas
          textCode += String.fromCharCode((cifrar - 97 + offset) % 26 + 97);
  
        } else if (cifrar >= 33 && cifrar <= 47) {  //pontos
          textCode += string.charAt(i);  //charAt retorna o caractere especificado a partir de uma string no caso esta sendo usado para manter os pontos (sem cifrar)
  
        } else if (cifrar >= 58 && cifrar <= 64) {   //pontos e caracteres
          textCode += string.charAt(i);
  
        } else if (cifrar >= 91 && cifrar <= 96) {    //acento
          textCode += string.charAt(i); 
                            
        } else if (cifrar >= 123 && cifrar <= 254) {    //barras, acentos, ç, sinais
          textCode += string.charAt(i);
  
        } else if (cifrar == 32) { //espaço entre palavras
          textCode += string.charAt(i);
        }
      }
      return textCode; //retorna o resultado da cifra
    },
  
    decode: function (offset, string) {
      if (!offset) { //negação ! 
        throw new TypeError();
      }
  
      let textDecode = "";
  
      for (let i = 0; i < string.length; i++) {
  
        let decifra = string.charCodeAt(i);
  
        if (decifra >= 65 && decifra <= 90) {
          textDecode += String.fromCharCode((decifra + 65 - offset) % 26 + 65);
  
        } else if (decifra >= 97 && decifra <= 122) {
          textDecode += String.fromCharCode((decifra - 122 - offset) % 26 + 122); 
  
        } else { //pega todos os caracteres que não forem letra maiuscula ou minuscula
          textDecode += string.charAt(i); 
        }
      }
      return textDecode;
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
  
  Código ASC - A = 65 .... Z = 90
          ((codigoDaLetraASC - cod1Letra + desloc) % tamAlfabeto) + cod1Letra
  
          codigoASC => codigo0a25 => desloco => giro (loop) => codigoASC 
      
        cipher.encode(offset, string): offset é o número de posições que queremos mover para a direita no alfabeto e string é a mensagem (texto) que queremos cifrar.
  
  */
  