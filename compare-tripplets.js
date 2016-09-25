

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
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var alice=0;
    var bob=0;
    var count=0;

    if(a0 >=1 && a0 <=100 && b0 >=1 && b0 <= 100){
        (a0 > b0)?alice++:(b0 > a0)?bob++:count++;
    }
    if(a1 >=1 && a1 <=100 && b1 >=1 && b1 <= 100){
        (a1 > b1)?alice++:(b1 > a1)?bob++:count++;
    }
    if(a2 >=1 && a2 <=100 && b2 >=1 && b2 <= 100){
        (a2 > b2)?alice++:(b2 > a2)?bob++:count++;
    }

    console.log("%d %d",alice,bob);    

        

}
