process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main(input_stdin_array);    
});

function main(array){
    var T=array[0];
    abcd=array[1];
    abcd=abcd.split(' ');
    var a= parseInt(abcd[0]);
    var b=parseInt(abcd[1]);
    var c=parseInt(abcd[2]);
    var d=parseInt(abcd[3]);
    console.log("T :",T);
    console.log("%d %d %d %d",a,b,c,d);
    if(T>=1 && T<=20){
        if(a>=1 && a<=Math.pow(10,6) && b>=1 && b<=Math.pow(10,6) && c>=1 && c<=Math.pow(10,6) && d>=1 && d<=Math.pow(10,6)){
            if(b<d){
                var n=b;
                var r=a;
                var result=fact(n)/(fact(n-r)*fact(r));
                console.log(result);           
            }else if(b>d){
                var result=Math.max(a,b,c,d)-Math.min(a,b,c,d);
                console.log(result);
            }
        }else{
            console.log("Range exceeding !!");
        }
        
    }
}

function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n*fact(n-1);
    }
}


function fact (n) {
  var _factorial = function myself (acc, n) {
    return n
    ? myself(acc * n, n - 1)
    : acc
  };
  
  return _factorial(1, n);
}