const pigLatin = (str) => {
    return str
        .split(' ')
        .map(word => {
            const index = firstVowelIndex(word);
            const beginning = word.slice(0, index);
            const ending = word.slice(index);
            return ending + beginning + 'ay';
            // return `${ending}${beginning}ay`;
        })
        .join(' ');
}

const firstVowelIndex = (str) => {
    const vowels = str.match(/[aeiou]/g);
    if(vowels[0] == "u" && str[str.indexOf(vowels[0] - 1)] == "q") {
        return str.indexOf(vowels[1]);
    }
    return str.indexOf(vowels[0]);
}
  
// Do not edit below this line
module.exports = pigLatin;

//  correct solution 01/02/2023
