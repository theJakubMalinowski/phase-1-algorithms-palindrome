function isPalindrome(word) {
  // Write your algorithm here
    let reversed = word.split("").reverse().join("");
      return word === reversed;
}

/* 
  Add your pseudocode here
       Reverse the word
       Compare the word that has been reversed with the original word
       If both match, return true, if they dont, return false

/*
  Add written explanation of your solution here
      See pseudocode...
      The word is first split, then the letters are reversed and compared to the original split string of letters.
      If both match, return true, if they dont, return false
      
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
