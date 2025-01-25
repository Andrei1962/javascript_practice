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
function enumeration(array, type) {                                     /* функция - enumeration */
  let newArray = array.filter(item => item.type === type);              /* фильтруем массив array по type */
  return newArray;                                                      /* отфильтрованный массив */
}
let fruits = enumeration(products,'fruits');
console.log('fruits', fruits);
let technic = enumeration(products,'technic');
console.log('technic', technic);