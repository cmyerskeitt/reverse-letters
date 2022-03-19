function reverseLetter(str) {
    return str.replace(/[^A-Za-z]/ig, "").split('').reverse().join('')
     
   }