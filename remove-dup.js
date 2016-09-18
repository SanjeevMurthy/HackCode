function find_unique_characters( string ){
    var unique='';
    for(var i=0; i<string.length; i++){
        if(string.lastIndexOf(string[i]) == string.indexOf(string[i])){
            unique += string[i];
        }
    }
    return unique;
}
console.log(find_unique_characters('baraban'))




function unique(str) {
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }
  return result;
}

console.log(
  unique('abcdab'),
  unique('aaabbc')
);