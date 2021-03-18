console.log('this is fifty one');

// Iterators

function fruitIterator(values) {
    let nextIndex = 0;
    // we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // we will return below object
                return {

                    // value: values[nextIndex++],
                    // value: values[++nextIndex],

                    done: false

                }
            } else {
                // we will return below object with only done
                return {
                    done: true
                }
            }

        }
    }
}

const myArray = ['Apples', 'Grapes', 'Oranges', 'Vg'];

console.log("My array is ",myArray);


// using the iterator
const fruits = fruitIterator(myArray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());

// console.log(fruits.next().value);
// console.log(fruits.next().value);
// console.log(fruits.next().value);
// console.log(fruits.next().value);
// console.log(fruits.next().value);
