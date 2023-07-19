import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

const JavascriptArraysPage = () => {
  return (
    <>
      <Typography>
        Here you have a list of some interesting functions
      </Typography>
      <Typography variant="h6">map</Typography>
      <Typography>
        The map function creates a new array by calling a provided function on
        each element of the original array. It then returns the results of these
        function calls as a new array. The original array remains unchanged.
      </Typography>
      <Code noHeader>
        <>{`
array.map(function(currentValue, index, array) {
  // Your code here
});`}</>
      </Code>
      <Code noHeader>
        <>{`
const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map(function(num) {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16]`}</>
      </Code>
      <Typography variant="h6">includes</Typography>
      <Typography>
        The includes function checks if an array includes a certain value and
        returns true if the value is found, and false otherwise.
      </Typography>
      <Code noHeader>
        <>{`
array.includes(searchElement, fromIndex);`}</>
      </Code>
      <Code noHeader>
        <>{`
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('grape'));  // Output: false`}</>
      </Code>
      <Typography variant="h6">forEach</Typography>
      <Typography>
        The forEach function allows you to execute a provided function once for
        each element in the array. It does not return a new array but is
        commonly used for iteration or performing side effects on the array
        elements
      </Typography>
      <Code noHeader>
        <>{`
array.forEach(function(currentValue, index, array) {
  // Your code here
});`}</>
      </Code>
      <Code noHeader>
        <>{`
const colors = ['red', 'green', 'blue'];

colors.forEach(function(color, index) {
  console.log("Color at index ", index,": ", color);
});

/* Output:
Color at index 0: red
Color at index 1: green
Color at index 2: blue
*/`}</>
      </Code>
      <Typography variant="h6">filter</Typography>
      <Typography>
        The filter function creates a new array with all elements that pass the
        test implemented by the provided function.
      </Typography>
      <Code noHeader>
        <>{`
array.filter(function(currentValue, index, array) {
  // Your filtering condition here
});`}</>
      </Code>
      <Code noHeader>
        <>{`
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8]`}</>
      </Code>
      <Typography variant="h6">reduce</Typography>
      <Typography>
        The reduce function applies a function against an accumulator and each
        element of the array (from left to right) to reduce it to a single
        value.
      </Typography>
      <Code noHeader>
        <>{`
array.reduce(function(accumulator, currentValue, index, array) {
  // Your reduction logic here
}, initialValue);`}</>
      </Code>
      <Code noHeader>
        <>{`
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 10`}</>
      </Code>
      <Typography variant="h6">find</Typography>
      <Typography>
        The find function returns the value of the first element in the array
        that satisfies the provided testing function.
      </Typography>
      <Code noHeader>
        <>{`
array.find(function(currentValue, index, array) {
  // Your condition to find the element
});`}</>
      </Code>
      <Code noHeader>
        <>{`
const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find(function(num) {
  return num > 2;
});

console.log(foundNumber); // Output: 3`}</>
      </Code>
      <Code noHeader>
        <>{`
`}</>
      </Code>
      <Typography variant="h6">some</Typography>
      <Typography>
        The some function tests whether at least one element in the array passes
        the test implemented by the provided function.
      </Typography>
      <Code noHeader>
        <>{`
array.some(function(currentValue, index, array) {
  // Your condition to check
});
`}</>
      </Code>
      <Code noHeader>
        <>{`
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(function(num) {
  return num % 2 === 0;
});

console.log(hasEvenNumber); // Output: true`}</>
      </Code>
      <Typography variant="h6">every</Typography>
      <Typography>
        The every function tests whether all elements in the array pass the test
        implemented by the provided function.
      </Typography>
      <Code noHeader>
        <>{`
array.every(function(currentValue, index, array) {
  // Your condition to check
});`}</>
      </Code>
      <Code noHeader>
        <>{`
const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(function(num) {
  return num % 2 === 0;
});

console.log(allEven); // Output: true`}</>
      </Code>
      <Typography variant="h6">indexOf</Typography>
      <Typography>
        The indexOf function returns the first index at which a given element
        can be found in the array, or -1 if it is not present.
      </Typography>
      <Code noHeader>
        <>{`
array.indexOf(searchElement, fromIndex);`}</>
      </Code>
      <Code noHeader>
        <>{`
const fruits = ['apple', 'banana', 'orange'];

const bananaIndex = fruits.indexOf('banana');
console.log(bananaIndex); // Output: 1

const grapeIndex = fruits.indexOf('grape');
console.log(grapeIndex); // Output: -1
`}</>
      </Code>
      <Typography variant="h6">sort</Typography>
      <Typography>
        The sort function sorts the elements of an array in place and returns
        the sorted array. By default, it sorts elements as strings. However, you
        can provide a compare function for custom sorting.
      </Typography>
      <Code noHeader>
        <>{`
array.sort(compareFunction);`}</>
      </Code>
      <Code noHeader>
        <>{`
const fruits = ['banana', 'apple', 'orange'];

fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'orange']

fruits.sort((a,b) => a <= b ? 1 : -1)
console.log(fruits); // Output: ['orange', 'banana', 'apple']`}</>
      </Code>
      <Typography variant="h6">reverse</Typography>
      <Typography>
        The reverse function reverses the order of the elements in the array in
        place and returns the modified array.
      </Typography>
      <Code noHeader>
        <>{`
array.reverse();`}</>
      </Code>
      <Code noHeader>
        <>{`
const numbers = [1, 2, 3, 4, 5];

numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]`}</>
      </Code>
      <Typography variant="h6">slice</Typography>
      <Typography>
        The slice function returns a shallow copy of a portion of an array into
        a new array. You can specify the start and end indexes for the slice
        (the end index is not included).
      </Typography>
      <Code noHeader>
        <>{`
array.slice(startIndex, endIndex);`}</>
      </Code>
      <Code noHeader>
        <>{`
const numbers = [1, 2, 3, 4, 5];

const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // Output: [2, 3, 4]`}</>
      </Code>
      <Typography variant="h6">splice</Typography>
      <Typography>
        The splice function changes the contents of an array by removing
        existing elements and/or adding new elements in place. It modifies the
        original array and returns an array containing the removed elements.
      </Typography>
      <Code noHeader>
        <>{`
array.splice(startIndex, deleteCount, item1, item2, ...);`}</>
      </Code>
      <Code noHeader>
        <>{`
const numbers = [1,2,3,4,5,6,7]

console.log(numbers.splice(0)) // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(numbers);        // Output: []`}</>
      </Code>
      <Code noHeader>
        <>{`
const numbers = [1,2,3,4,5,6,7]

console.log(numbers.splice(2)) // Output: [3, 4, 5, 6, 7]
console.log(numbers);        // Output: [1, 2]`}</>
      </Code>
      <Code noHeader>
        <>{`
const numbers = [1,2,3,4,5,6,7]

console.log(numbers.splice(2,4)) // Output: [3, 4, 5, 6]
console.log(numbers);        // Output: [1, 2, 7]`}</>
      </Code>
      <Code noHeader>
        <>{`
const fruits = ['apple', 'banana', 'orange', 'grape'];

const removedFruits = fruits.splice(1, 2, 'kiwi', 'pear');
console.log(fruits);        // Output: ['apple', 'kiwi', 'pear', 'grape']
console.log(removedFruits); // Output: ['banana', 'orange']`}</>
      </Code>
      <Typography variant="h6">concat</Typography>
      <Typography>
        The concat function is used to merge two or more arrays and create a new
        combined array without modifying the existing arrays.
      </Typography>
      <Code noHeader>
        <>{`
array.concat(array1, array2, ...);`}</>
      </Code>
      <Code noHeader>
        <>{`
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];

const combinedArray = array1.concat(array2, array3);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]`}</>
      </Code>
      <Typography variant="h6">join</Typography>
      <Typography>
        The join function creates a new string by concatenating all the elements
        of an array using a specified separator. By default, the separator is a
        comma.
      </Typography>
      <Code noHeader>
        <>{`
array.join(separator);`}</>
      </Code>
      <Code noHeader>
        <>{`
const fruits = ['apple', 'banana', 'orange'];

const fruitsString = fruits.join(', ');
console.log(fruitsString); // Output: "apple, banana, orange"`}</>
      </Code>
      <Typography variant="h6">flat</Typography>
      <Typography>
        The flat function creates a new array that is a flattened version of the
        original array. It removes nested arrays and concatenates their elements
        into the new array.
      </Typography>
      <Code noHeader>
        <>{`
array.flat(depth);`}</>
      </Code>
      <Code noHeader>
        <>{`
const nestedArray = [1, [2, 3], [4, [5, 6]]];

const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]`}</>
      </Code>

      <Typography variant="h6">aaaaa</Typography>
      <Typography>aaaaa</Typography>
      <Code noHeader>
        <>{`
`}</>
      </Code>
      <Code noHeader>
        <>{`
`}</>
      </Code>

      <Typography variant="h6">aaaaa</Typography>
      <Typography>aaaaa</Typography>
      <Code noHeader>
        <>{`
`}</>
      </Code>
      <Code noHeader>
        <>{`
`}</>
      </Code>

      <Typography variant="h6">aaaaa</Typography>
      <Typography>aaaaa</Typography>
      <Code noHeader>
        <>{`
`}</>
      </Code>
      <Code noHeader>
        <>{`
`}</>
      </Code>

      <Typography variant="h6">aaaaa</Typography>
      <Typography>aaaaa</Typography>
      <Code noHeader>
        <>{`
`}</>
      </Code>
      <Code noHeader>
        <>{`
`}</>
      </Code>

      <Typography variant="h6">aaaaa</Typography>
      <Typography>aaaaa</Typography>
      <Code noHeader>
        <>{`
`}</>
      </Code>
      <Code noHeader>
        <>{`
`}</>
      </Code>

      <Typography variant="h6">aaaaa</Typography>
      <Typography>aaaaa</Typography>
      <Code noHeader>
        <>{`
`}</>
      </Code>
      <Code noHeader>
        <>{`
`}</>
      </Code>

      <Typography variant="h6">aaaaa</Typography>
      <Typography>aaaaa</Typography>
      <Code noHeader>
        <>{`
`}</>
      </Code>
      <Code noHeader>
        <>{`
`}</>
      </Code>
    </>
  );
};

export default JavascriptArraysPage;
