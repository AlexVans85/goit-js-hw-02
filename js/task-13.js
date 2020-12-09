const findLongestWord = function(string) {
    
    let stringSplit = string.split(' ');
    console.log(stringSplit)
    let longestWord = '';


   
   for (let i = 0; i < stringSplit.length; i += 1) {
     if (stringSplit[i].length > longestWord.length) {
       longestWord = stringSplit[i];
     }
   }
    return longestWord;
  };
  




console.log(findLongestWord('The  quick brown fox jumped over the lazy dog')); 
//   // 'jumped'
  
 console.log(findLongestWord('Google do a roll')); 
//   // 'Google'
  
  console.log(findLongestWord('May the force be with you')); 
//   // 'force'

// const string = 'The quick brown fox jumped over the lazy dog';
// let stringSplit = string.split(' ');
//     // console.log(stringSplit)
//     // console.log(stringSplit.length)
//     let longestWord = '';


   
//    for (let i = 0; i < stringSplit.length; i += 1) {
//      if (stringSplit[i].length > longestWord.length) {
//       longestWord = stringSplit[i];
//      }
 
//    }

//    console.log(longestWord)