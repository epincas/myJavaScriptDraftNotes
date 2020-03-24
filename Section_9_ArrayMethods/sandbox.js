// SECTION 9 - FIVE ARRAYS METHODS

const scores = [10,30,15,25,50,40,5];

// The Filter method: takes a callback function as an argument,...
//... if the call back function returns true, then the iterated item is kept,...
//... otherwise (if it returns false) the item is filtered out of the array.

// Example #1 of .filter():
let filteredArray = scores.filter(
    () => {
        return true; // this keeps each item in the array
    }
);
console.log(`first filter-Scores: ${scores}`);
console.log(`first filter-filteredArray: ${filteredArray}`);

// Example #2 of .filter():
filteredArray = scores.filter(
    () => {
        return false; // this filters out each item in the array.
    }
);
console.log(`Second filter-Scores: ${scores} ==> the method .filter() is NON DISCTRUCTIVE`);
console.log(`Second filter-filteredArray: ${filteredArray}`);

// Example #3 of .filter():
filteredArray = scores.filter(
    score => {
  return score > 20; // the first(10), third(15) and last(5) items of the above array will be filtered out.
                     // we are only left with the score that are over 20.
});
console.log(`Third filter-Scores: ${scores} ==> the method .filter() is NON DISCTRUCTIVE`);
console.log(`Third filter-filteredArray: ${filteredArray}`);

// Example #4 of .filter(): (array containing objects)
const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

let premiumUsers = users.filter(user => {
  return user.premium;
});
console.log(premiumUsers);

//shorter version of the above function:
premiumUsers = users.filter(user => user.premium); // short version without curly brackets & withouth keyword return.
console.log(premiumUsers);

// The Map method: it iterates the array and creates a completely new array with the updated items.
// The map method takes a callback function that ??
// ... non-destructive method thad does not change the original array.

// Example 1 of .map():
const prices = [20,10,30,25,15,40,80,5];
const salesPrices = prices.map(
    (item) => {
        return item / 2;
    }
);
console.log(salesPrices); // Output = Array(8) [ 10, 5, 15, 12.5, 7.5, 20, 40, 2.5 ]
// short version of above function: const salesprices = prices.map(price => item / 2);

// Example 1 of .map(): (array containing objects)
const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banan skin', price: 10},
    {name: 'red shells', price: 50}
];

// Challenge: create new array based on original array, where new prices are divided by 2 ONLY IF original price > 30.
const saleProducts = products.map(
    item => {
        if(item.price > 30){
        return {name: item.name, price: item.price / 2}; // we want to return an object
      }  else {
          return item;
      }
    }
);
console.log(saleProducts);
// Output = 
// 5) […]
// 0: Object { name: "gold star", price: 20 }
// 1: Object { name: "mushroom", price: 20 }
// 2: Object { name: "green shells", price: 30 }
// 3: Object { name: "banan skin", price: 10 }
// 4: Object { name: "red shells", price: 25 }
// length: 5

// The reduce method: it does not necessarily return a new array but a value that you want based on the original array.
// Def: Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// Example #1: challenge: how may scores are there over 50? (we will return a number)
const scores2 = [10,20,60,40,70,90,30];
const result = scores2.reduce(
    (accumulated, currentItem) => {
        if(currentItem > 50){
            accumulated++;
        }
        return accumulated;
    }, 0 // second argument passed to .reduce() to tel the value of the accumulated the very first time.
);
console.log(`The output of the .reduce() method is: ${result}`); // Output = 3 (because the array has 3 values greater than 50)
// the .reduce() returns a single value.

// Example #2:
const scores3 = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
];
// challenge: iterate each object and add up only mario's score. 
const marioTotal = scores3.reduce(
    (accumulator, currentItem) => {
        if(currentItem.player === 'mario'){
            accumulator += currentItem.score;
        }
        return accumulator;
    }
    ,
    0);
    console.log(`Total accumulated score of mario is: ${marioTotal}`); // returns a single value.

// The .find() method returns the value of the first element of an array that passes a certain test inside a callback function.
// Once the item in the array is found, it stops there.
// Example #1: we want to find the first score inside this array below that is greater than 50.
const scores4 = [10,5,0,40,60,10,20,70];
const firstHighScore = scores4.find(
    (itemScore) => {
       return  itemScore > 50;
    }
);
console.log(`The first item greater than 50 is ${firstHighScore}.`); // Output = 60;

// Here is the short version: const firstHighScore = scores4.find(itemScore => itemScore > 50);

// The .sort() method: it alters the order of the items in the array object invoking the method.
// it does not return a new array, therefore this is a distructive method cause it changes the original array.

// Example #1: sort an array by alphabetical OverconstrainedError:
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
names.sort();
console.log(names); // Output = Array(5) [ "chun-li", "luigi", "mario", "shaun", "yoshi" ]

// Example #2:
const scores5 = [10,50,20,5,35,70,45];
scores5.sort();
console.log(scores5); // Output = Array(7) [ 10, 20, 35, 45, 5, 50, 70 ] notice that it is ONLY looking at the first number digit and ordering it by THAT criteria but it is not understanding that these are whole numbers, hence 5 not being correctly sorted. That's because no compareFunction is supplied and JavaScript sort the elements by converting them to string, so 8 comes before 80.

// The oposit method to .sort is .reverse
// Example #3:
names.reverse();
console.log(names);

// how can we get over the previous limitation, .sort() not understanding that scores5 contains whole numbers.
// Example #4: we want to sort this array object based on the score value (highers score first)
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
];
// doing this would not work: players.sort() because it does not know what to sort by (by name? by score?)
// that's why we have to provide an argument that is a function to that sort method.
// This function is called the compare function it is used to compare two consecutive items in our array (a & be) in order to sort them.
// video 04:00 - Section #9 - Sort Method
// comparing a and b well explained: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
players.sort(
    (a,b) => {
        if(a.score > b.score){
            return -1;
        } else if(b.score > a.score){
            return 1;
        } else {
            return 0;
        }
    }
);
console.log(players); // Output (below) =
// (5) […]
// ​0: Object { name: "shaun", score: 70 }
// ​1: Object { name: "chun-li", score: 50 }
// ​2: Object { name: "yoshi", score: 30 }
// ​3: Object { name: "mario", score: 20 }
// ​4: Object { name: "luigi", score: 10 }

// Here is the short way to write it:
players.sort((a,b) => b.score - a.score);
console.log(players);

// Shore version of the above simple array of numbers
scores5.sort((a,b) => b - a);
console.log(scores5);

// Chaining array Methods together
// Given the array products (below) we want to:
// 1st: filter out any product that is not over 20 in price (that will produce a new array);
// 2ond: take the above new filtered array an map it to a new array of products with a new Sales price.
const products2 = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
];
//Step#1:
const filtered = products2.filter(productItem => productItem.price > 20); // if condition is true, the item is kept in, if it is false it is filtered out.
console.log(filtered);

//Step#2:
const promotion = filtered.map(
    productItem => {
        return `The ${productItem.name} is ${productItem.price / 2} British Pounds`;
    }
);
// we now have a new array called promotion where each element is a string.
console.log(promotion); // Output =
// 3) […]
// 0: "The gold star is 15 British Pounds"
// 1: "The red shell is 20 British Pounds"
// 2: "The mushroom is 25 British Pounds"
// length: 3

// the above 2 steps can be chained (below):
const chainedPromo = products2
    .filter(productItem => productItem.price > 20)
    .map(productItem => `The ${productItem.name} is ${productItem.price / 2} British Pounds`);
console.log(chainedPromo); // same output as above.


