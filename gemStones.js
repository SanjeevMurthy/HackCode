/**
John has discovered various rocks. Each rock is composed of various elements, and each element is represented by a lower-case Latin letter from 'a' to 'z'. An element can be present multiple times in a rock. An element is called a gem-element if it occurs at least once in each of the rocks.

Given the list of  rocks with their compositions, display the number of gem-elements that exist in those rocks.

Input Format

The first line consists of an integer, , the number of rocks.
Each of the next  lines contains a rock's composition. Each composition consists of lower-case letters of English alphabet.

Constraints

Each composition consists of only lower-case Latin letters ('a'-'z').
 length of each composition

Output Format

Print the number of gem-elements that are common in these rocks. If there are none, print 0.

Sample Input

3
abcdde
baccd
eeabg
Sample Output

2
Explanation

Only "a" and "b" are the two kinds of gem-elements, since these are the only characters that occur in every rock's composition.

**/

function processData(input) {
    var alpha='abcdefghijklmnopqrstuvwxyz';
    var gems=alpha.split('');
    var Oldarr=input.split('\n');
    var N=parseInt(Oldarr.splice(0,1));
    var Gems=[];
    var arr=[];
    var uniq='';

    var clearArray=[];

    if(N>=1 && N<=100){
        Oldarr.forEach(function(str,index){
            if(str == ''){
                Oldarr.splice(index,1);
            }else{
                 if(checkForLowerAndLength(str)){
                    clearArray.push(str);
                }
            }
        });


         clearArray.forEach(function(ele){
            uniq=uniqueChars(ele);
            text=uniq.split('');
            for(i=0;i<gems.length;i++){
                if(text.indexOf(gems[i]) < 0){
                    gems.splice(i,1);
                    i--;
                }
            }
        });
       console.log(gems.length);



    }else{
        console.log("N is Greater or Less than 0");
    }


    }

  function uniqueChars(string) {
  var result = '';
  for(var i = 0; i < string.length; i++) {
    if(result.indexOf(string[i]) < 0) {
      result += string[i];
    }
  }
  return result;
}
function checkForLowerAndLength(str){
    var strings = str.toString();
    var i=0;
    var character;
    if(strings.length>=1 && strings.length <=100){
         while (i <= strings.length-1){
            character = strings.charAt(i);
            if (!isNaN(character * 1)){
                return false;
            }else if (character == character.toUpperCase()) {
                return false;
            }
            i++;
        }
      return true;
    }else{
        return false;
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
