export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export const foodItems = [
  {
    name: 'Cheese Pizza',
    img: '/img/pizza.png',
    section: 'Pizza',
    price: 9
    },
  {
    name: 'Pepperoni Pizza',
    img: '/img/pizza2.jpeg',
    section: 'Pizza',
    price: 10
    },
  {
    name: 'Veggie Pizza',
    img: '/img/healthy-pizza.jpeg',
    section: 'Pizza',
    price: 10
    },
  {
    name: 'Chicken Pizza',
    img: '/img/chicken-pizza.jpeg',
    section: 'Pizza',
    price: 11.5
    },
  {
    name: 'Wings',
    img: '/img/wings.jpeg',
    section: 'Wings',
    price: 6
  },
  {
    name: 'wedges',
    img: '/img/wedges.jpg',
    section: 'Sides',
    price: 4
  },
  {
    name: 'Cheesesticks',
    img: '/img/cheesesticks.jpeg',
    section: 'Sides',
    price: 2
  }

];

export const foods = foodItems.reduce((res,food) => {
  if(!res[food.section]){
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
