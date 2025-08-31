
const salma = 85;
const rakib = 99;

if(salma > rakib){
      console.log('Salma will get the price')
}
else{
      console.log('Rakib will get the price')
}

function getMax(num1, num2){
      if(num1 > num2){
            return num1
      }
      return num2
}

const max = getMax(salma, rakib);
// console.log('max:', max);


// Max num from three elements;
const jim = 56;
const tim = 89;
const kim = 100;

if(jim > tim && jim > kim){
      console.log('Jim the gether Boss')
}
else if(tim > jim && tim > kim){
      console.log('Tim is the Boss')
}
else{
      console.log('Kim is the Boss Finally')
}

