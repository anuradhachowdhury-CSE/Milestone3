//Assignment:1

function feetToMile(n){
    if(n<=0){
        console.log("Warning!!!");
    }
    else{
     feet=(n*0.000189394);
  return feet;
}
}
var resultOfMile=feetToMile(10);
console.log("Mile=",resultOfMile);
var resultOfMile=feetToMile(500);
console.log("Mile=",resultOfMile);


// Assignment:2
function woodCalculator(chair,table,bed){
    var chair=1*chair;
    var table=3*table;
    var bed=5*bed;
    var totalWood=chair+table+bed;
    return totalWood;
}
var totalWoodIs=woodCalculator(1,1,1);
console.log("Total wood needed:",totalWoodIs);
var totalWoodIs=woodCalculator(10,10,12);
console.log("Total wood needed:",totalWoodIs);

//Assignment:3

function brickCalculator(num){

    if(num<=10){
        var first=num*15*1000;
        return first;
    }
    else if(num>=11 && num<=20){
        var first=num*15*1000;
        var second=num*12*1000;
        var firstSecondTotal=first+second;
        return firstSecondTotal;
    }
    else if(num>20){
        var first=num*15*1000;
        var second=num*12*1000;
        var third=num*10*1000;
        var totalFirstToThird=first+second+third;
       return totalFirstToThird;
    }
    }
    var totalBrick=brickCalculator(15);
    console.log("Total Brick is:",totalBrick);
    var totalBrick=brickCalculator(30);
    console.log("Total Brick is:",totalBrick);
    


//Assignment:4

function tinyFriend(name){
    smallName=name[0];
    for(var i=0;i<name.length;i++){
        var compareName=name[i];
        if(compareName.length<smallName.length)
          smallName=compareName;
    }
return smallName;
}
var tinyNameIs=tinyFriend(["Alifa","Srabony","Jui","Sanjoy","Abhishek"]);
console.log("Tiny name is:",tinyNameIs);
var tinyNameIs=tinyFriend(["Arundhoti","Jogannmoye","Priyanka","Shila"]);
console.log("Tiny name is:",tinyNameIs);
