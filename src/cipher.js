const cipher = {
  encode: function (offset, string) {
    if (!offset) {
      throw new TypeError();
    }

    let textCode = "";

    for (let i = 0; i < string.length; i++) {
      let cifrar = string.charCodeAt(i);

      if (cifrar >= 65 && cifrar <= 90) {
        textCode += String.fromCharCode(((cifrar - 65 + offset) % 26) + 65);
      } else if (cifrar >= 97 && cifrar <= 122) {
        textCode += String.fromCharCode(((cifrar - 97 + offset) % 26) + 97);
      } else {
        textCode += string.charAt(i);
      }
    }
    return textCode;
  },

  decode: function (offset, string) {
    if (!offset) {
      throw new TypeError();
    }

    let textDecode = "";

    for (let i = 0; i < string.length; i++) {
      let decifra = string.charCodeAt(i);

      if (decifra >= 65 && decifra <= 90) {
        textDecode += String.fromCharCode(((decifra + 65 - offset) % 26) + 65);
      } else if (decifra >= 97 && decifra <= 122) {
        textDecode += String.fromCharCode(
          ((decifra - 122 - offset) % 26) + 122
        );
      } else {
        textDecode += string.charAt(i);
      }
    }
    return textDecode;
  },
};

export default cipher;
