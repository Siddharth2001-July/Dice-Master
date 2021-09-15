// var upto = prompt("Enter the number upto which you want fibonacci series");
// var name2 = prompt("Enter 2nd Person name");
// var b = prompt("Enter 2nd number");
// var c = a;
// a = b;
// b = c;
// console.log(c);
// alert(a+"\n You have written "+a.length+" words and "+(250-a.length)+" remaining.");
// document.getElementById("heading").innerHTML=a+"\n You have written "+a.length+" words and "+(250-a.length)+" remaining.";
// var c = a.slice(0,1);
// function fibonacci(upto){
//     var fib=[0,1];
//     for(var i = 2; i < upto; i++){
//         fib.push(fib[i-1]+fib[i-2]);
//     }
//     if(upto>2)
//         return "Fibonacci series upto "+upto+"  is "+fib;
//     else if(upto===1)
//         return "Fibonacci series upto "+upto+"  is "+fib[1];
//     else
//         return "Enter a valid input";
// }
// alert(fibonacci(parseInt(upto)));
function rand(){
    return Math.floor((Math.random()*6)+1);
}
function numSelect1(){
    switch(rand()){
        case 1:
            document.querySelector(".dice1").src="image/dice1.png";
            return 1;
        case 2:
            document.querySelector(".dice1").src="image/dice2.png";
            return 2;
        case 3:
            document.querySelector(".dice1").src="image/dice3.png";
            return 3;
        case 4:
            document.querySelector(".dice1").src="image/dice4.png";
            return 4;
        case 5:
            document.querySelector(".dice1").src="image/dice5.png";
            return 5;
        case 6:
            document.querySelector(".dice1").src="image/dice6.png";
            return 6;
    }
}
function numSelect2(){
    switch(rand()){
        case 1:
            document.querySelector(".dice2").src="image/dice1.png";
            return 1;
        case 2:
            document.querySelector(".dice2").src="image/dice2.png";
            return 2;
        case 3:
            document.querySelector(".dice2").src="image/dice3.png";
            return 3;
        case 4:
            document.querySelector(".dice2").src="image/dice4.png";
            return 4;
        case 5:
            document.querySelector(".dice2").src="image/dice5.png";
            return 5;
        case 6:
            document.querySelector(".dice2").src="image/dice6.png";
            return 6;
    }
}
function roll(){
    var player1 = numSelect1();
    var player2 = numSelect2();
    if(player1>player2){
        document.querySelector(".stats").style.display="block";
        document.querySelector(".stats").classList.remove("orange");
        document.querySelector(".stats").innerHTML="Player 1 Won!";
    }
    else if(player2>player1){
        document.querySelector(".stats").style.display="block";
        document.querySelector(".stats").classList.remove("orange");
        document.querySelector(".stats").innerHTML="Player 2 Won!";
    }
    else{
        document.querySelector(".stats").style.display="block";
        document.querySelector(".stats").classList.add("orange");
        document.querySelector(".stats").innerHTML="Ohh it's a Tie<br>Roll Again!";
    }
}