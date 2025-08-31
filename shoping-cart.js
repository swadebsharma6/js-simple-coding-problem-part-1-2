
function getShoppingTotal (products){

      let total = 0;

      for(const product of products){

            total = total + product.price;
      };

      return total;

};

const products =[
      {name: 'shirt', price: 500},
      {name:'pent', price: 800},
      {name: 'shampoo', price: 250},
      {name: 'Body spray', price: 250},
      {name: 'dairy', price: 250},

];

const total = getShoppingTotal(products);
console.log('total malamal price', total);