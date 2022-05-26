function feetToMile(feet){
    var result = feet / 5280;

    return result
}
 var result = feetToMile(5280);
console.log(result, "mile");


function woodCalculator(chair, table, khat){
    var total =  chair*1 + table*3 + khat*5;
    return total
}
var total = woodCalculator(5, 5, 12);
console.log(total, "Cubic feet");


function brickCalculator(tala){
    if (tala <=10 ){
        result = tala*1000*15;
       
    }
    else if(tala >10 && tala<=20){
        sum1 = tala -10;
        sum2 = sum1*1000*12;
        result = sum2 + 10*1000*15;
    }
    else{
        sum3 = tala-20;
        sum4 = sum3*1000*10;
        sum5 = sum4 + 10*1000*12;
        result = sum5 + 10*1000*15;
    }
   
    return result
   
}
var brick = brickCalculator(102);
console.log(result, "Bricks");





function getShortestWord(wordsArray) {
	return wordsArray.sort((a, b) => a.length - b.length)[0];
}
words = ["shahin", "manna", "koka","jubayed","ovi"];
console.log(getShortestWord(words));