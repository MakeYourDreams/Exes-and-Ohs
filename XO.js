function XO(str) {
let x = 0;
let o = 0;

     for (var i = 0; i < str.length; i++) {
      currentCharacter = str.charAt(i);
        if (currentCharacter == "x" || currentCharacter == "X") {
           x += 1;
          }
        if (currentCharacter == "o" || currentCharacter == "O") {
           o += 1;
          }
        }
        
        if (x === o) {
        return true;
        } else{
        return false;
        }
}
