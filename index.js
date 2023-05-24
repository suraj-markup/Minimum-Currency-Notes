
// const button1= document.querySelector('.btn');
// var one;
// var two;
// var three;
// var four;
// var five;
// var six;
// var seven;
// var eight;
// var nine;
// var ten;
// var sum;

document.getElementById('btn').addEventListener('click',alertBtn);

function alertBtn(event){
    event.preventDefault();
    var amt = document.getElementById('amou').value;
    amt = parseFloat(amt);
    one = Math.floor(amt/2000);
    document.getElementById('one').innerHTML=one;
    amt=amt-one*2000;

    two = Math.floor(amt/500);
    document.getElementById('two').innerHTML=two;
    amt=amt-two*500;  
    
    three = Math.floor(amt/200);
    document.getElementById('three').innerHTML=three;
    amt=amt-three*200; 

    four = Math.floor(amt/100);
    document.getElementById('four').innerHTML=four;
    amt=amt-four*100; 

    five = Math.floor(amt/50);
    document.getElementById('five').innerHTML=five;
    amt=amt-five*50; 

    six = Math.floor(amt/20);
    document.getElementById('six').innerHTML=six;
    amt=amt-six*20; 

    seven = Math.floor(amt/10);
    document.getElementById('seven').innerHTML=seven;
    amt=amt-seven*10; 

    eight = Math.floor(amt/5);
    document.getElementById('eight').innerHTML=eight;
    amt=amt-eight*5; 

    nine = Math.floor(amt/2);
    document.getElementById('nine').innerHTML=nine;
    amt=amt-nine*2; 

    ten = Math.floor(amt/1);
    document.getElementById('ten').innerHTML=ten;
    amt=amt-ten*1; 

    var sum= one+two+three+four+five+six+seven+eight+nine+ten;
    document.getElementById('eleven').innerHTML=sum;
   

}






// two=amt%500;
// if (two>0){
//     amt=amt-two*500;
// }

// three=amt%200;
// if (three>0){
//     amt=amt-three*200;
// }

// four=amt%100;
// if (four>0){
//     amt=amt-four*100;
// }

// five=amt%50;
// if (five>0){
//     amt=amt-five*50;
// }

// six=amt%20;
// if (six>0){
//     amt=amt-six*20;
// }

// seven=amt%10;
// if (seven>0){
//     amt=amt-seven*10;
// }

// eight=amt%5;
// if(eight>0){
//     amt=amt-eight*5;
// }

// nine=amt%2;
// if(nine>0){
//     amt=amt-nine*2;
// }

// ten=amt%1;
// if(ten>0){
//     amt=amt-ten*1;
// }

// sum=one+two+three+four+five+six+seven+eight+nine+ten;
// document.getElementById('one').innerHTML=one;
