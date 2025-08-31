
const prices = [25000, 30000, 15000, 27000, 100000, 89000];

function getMinPrice(prices){
      let minPrice = prices[0];
     for(const price of prices){
      if(price < minPrice){
            minPrice = price;
      }
     };
     return minPrice;
};


const cheap = getMinPrice(prices);
// console.log('the cheapest price is:', cheap);

const mobiles = [
      {name: 'Samsung', price: 20000, camera:'12MP', color: 'black'},
      {name: 'Nokia', price: 30000, camera:'12MP', color: 'black'},
      {name: 'Realme', price: 27000, camera:'12MP', color: 'black'},
      {name: 'Vivo', price: 29000, camera:'12MP', color: 'black'},
      {name: 'Iphone', price: 120000, camera:'12MP', color: 'black'},
];


function getCheapestPhone (phones){
      
      const chepPhone = phones[0];

      for(const phone of phones){

           if(phone.price < chepPhone){
             chepPhone = phone.price; 
           }
      };

      const phoneName = chepPhone.name;
      const price = chepPhone.price

      return {phoneName, price};
}

const result = getCheapestPhone(mobiles);
console.log('Cheapest phone is:', result)
