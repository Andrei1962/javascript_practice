let products = [
  {
    type: 'fruits',
    name: 'Banana',
    price: 200
  },
  {
    type: 'technic',
    name: 'TV',
    price: 7990,
    sale: 50
  },
  {
    type: 'technic',
    name: 'headphones',
    price: 1590,
    sale: 0
  },
  {
    type: 'fruits',
    name: 'Apple',
    price: 340
  },
  {
    type: 'fruits',
    name: 'Orange',
    price: 457
  },
  {
    type: 'technic',
    name: 'Screen',
    price: 5990,
    sale: 10
  },
  {
    type: 'fruits',
    name: 'Melon',
    price: 330
  },
  {
    type: 'fruits',
    name: 'Peach',
    price: 700
  },
  {
    type: 'technic',
    name: 'telephone',
    price: 15990,
    sale: 0
  },
  {
    type: 'technic',
    name: 'tablet',
    price: 10990,
    sale: 0
  },
];
let fruit = products.filter(item => item.type === 'fruits');              /* выделяем массив с item = type: 'fruits' */
let sum = fruit.reduce((sum, item) => {                                   /* суммируем price всего массива */
  return sum + item.price;
},0);                                                                     /* вначале  sum = 0 */
console.log(sum);

let electronics = products.filter(item => item.type === 'technic');       /* выделяем массив с item = type: 'technic' */
let electronics2 = electronics.filter(item => item.sale === 0);           /* выделяем массив с item.sale = 0 */
let sum2 = electronics2.reduce((sum2, item) => {                          /* суммируем price всего массива */
  return sum2 + item.price;
},0);                                                                     /* вначале  sum2 = 0 */
console.log(sum2);