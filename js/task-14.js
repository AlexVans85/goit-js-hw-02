const formatString = function(string) {
    let countString = string.length
    console.log(countString);

   if ( countString <= 40) {
    countString = string
    
   } else if (countString > 40) {
   
    let formatString = string.slice(0,40);
    countString =  formatString+'...'
}

return  countString

  };

  
 console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // вернется оригинальная строка
  
 console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
//   // вернется оригинальная строка
  
 console.log(
    formatString(
       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
   );
  // вернется форматированная строка