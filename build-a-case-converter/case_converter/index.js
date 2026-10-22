function getUpperCase(arg) {
    return arg.toUpperCase();
}

function getLowerCase(arg) {
    return arg.toLowerCase();
}

function getSentenceCase(arg) {
  return arg[0].toUpperCase() + arg.slice(1).toLowerCase();
}

function getProperCase(arg) {
 var splitArg = arg.toLowerCase().split(' ');
   for (var i = 0; i < splitArg.length; i++) {
       splitArg[i] = splitArg[i].charAt(0).toUpperCase() + splitArg[i].substring(1);     
   }
   // Directly return the joined string
   return splitArg.join(' '); 
}

console.log(getProperCase("hello world"));

module.exports = {
    getUpperCase,
    getLowerCase,
    getSentenceCase,
    getProperCase
}