// In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'
const shoppingCart = ['Milk','Coffee','Tea','Honey'];
shoppingCart.pop();
shoppingCart.push('sugar');
shoppingCart.unshift('Meat')
shoppingCart[3]= 'Lemon Tea';
console.log(shoppingCart);