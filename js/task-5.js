const checkForSpam = function(message) {

let lowerCaseMessage = message.toLowerCase();



let checkrSpam = lowerCaseMessage.includes('spam'); 
let checkrSale = lowerCaseMessage.includes('sale');
return checkrSpam || checkrSale

};
  
 
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

 console.log(checkForSpam('[SPAM] How to earn fast money?')); // true