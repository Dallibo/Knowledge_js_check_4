let line1 = `its first line`
let line2 = `its second line`
function stringLength(line1, line2){
    if (line1.length > line2.length){
        return 1
    }
    else if (line1.length < line2.length){
        return -1
    }
    else {
        return 0
    }
}
let result = stringLength(line1, line2)
console.log (result)

function capitalizeFirstLetter(line1) {
    const firstLetter = line1.charAt(0);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    const restOfString = line1.slice(1);
    return capitalizedFirstLetter + restOfString;
  }
let result1 = capitalizeFirstLetter(line1)
console.log (result1)

function countVowels(line1) {
    const vowels = ["a", "e", "i", "o", "u"];
    const lowercaseStr = line1.toLowerCase();
    let count = 0;
    for (let i = 0; i < lowercaseStr.length; i++) {
      if (vowels.includes(lowercaseStr[i])) {
        count++;
      }
    }
  
    return count;
  }
  const inputString = "Hello World";
  const vowelCount = countVowels(inputString);
  console.log(vowelCount);
  

  function spam(line3) {
    const spamWords = ["xxx", "100%"];
    const lowercaseLine3 = line3.toLowerCase();
    let isSpam = false;
  for (let i = 0; i < spamWords.length; i++) {
      if (lowercaseLine3.includes(spamWords[i])) {
        isSpam = true;
        break;
      }
    }
  
    return isSpam;
  }
  const line3 = "sell 100%";
  const isSpamDetected = spam(line3);
  console.log(isSpamDetected);
  