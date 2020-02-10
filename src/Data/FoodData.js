export const foodItems = [
  {
    name: 'Cheese Pizza',
    img: '/img/pizza.png',
    section: 'Pizza'
    },
  {
    name: 'Pepperoni Pizza',
    img: '/img/pizza2.jpeg',
    section: 'Pizza'
    },
  {
    name: 'Veggie Pizza',
    img: '/img/healthy-pizza.jpeg',
    section: 'Pizza'
    },
  {
    name: 'Chicken Pizza',
    img: '/img/chicken-pizza.jpeg',
    section: 'Pizza'
    },
  {
    name: 'Wings',
    img: '/img/wings.jpeg',
    section: 'Wings'
  },
  {
    name: 'wedges',
    img: '/img/wedges.jpg',
    section: 'Sides'
  },
  {
    name: 'Cheesesticks',
    img: '/img/cheesesticks.jpeg',
    section: 'Sides'
  }

];

export const foods = foodItems.reduce((res,food) => {
  if(!res[food.section]){
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
