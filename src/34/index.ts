export function getClosestPalindrome(word: string) {
  let foundMatch = 0;
  const charsToAdd = [];
  for (let index = word.length - 1; index >= 0; index--) {
    const currChar = word[index];
    if (currChar === word.charAt(foundMatch)) {
      foundMatch++;
    } else {
      charsToAdd.push(currChar);
    }
  }
  return charsToAdd.reduceRight((acc, curr) => curr + acc, word);
}
