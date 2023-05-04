let arr =[1,2,3,'abc',[3,5]];
let cities =[ 'Chennai','Trichy','Goa'];
let marks =[95,98,97,96,99];

let matrix=[[3,4,5],[4,5,6],[6,7,8]];


console.log(arr[3]);
console.log(cities.length)
console.log(arr[arr.length-1]);
console.log(arr[arr.length-1][0]);
console.log(arr[arr.length-1][1]);

console.log(cities[1]);
console.log(marks[3]);
console.log(matrix[0]);
console.log(matrix[(matrix.length-1)][1]);

let array = ['a','b','c','d','e'];

//push - add element to the end and returns the new length

array.push('f');
console.log(array); // o/p -> [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//pop - remove element from the end and returns removed value

console.log(array.pop());// o/p -> f

//shift - removes element from start of the array and returns removed value

console.log(array.shift());  // o/p -> a
console.log(array);// o/p -> [ 'b', 'c', 'd', 'e' ]

//unshift - adds element to the start of the array and returns new length

console.log(array.unshift('z')); // o/p -> 5
console.log(array);// o/p -> [ 'z', 'b', 'c', 'd', 'e' ]

//splice
array.splice(2,2);// deletes 2 elements from starting at index
console.log(array);// o/p -> [ 'z', 'b', 'e' ]

array.splice(1,1,'m');//replace - deletes element at index
console.log(array);// o/p -> [ 'z', 'm', 'e' ]

array.splice(1,2,'x','y'); // deletes elements at position 1 and 2
console.log(array);// o/p -> [ 'z', 'x', 'y' ]

array.splice(1,0,'b');
console.log(array);// o/p -> [ 'z', 'b', 'x', 'y' ]


//slice(Starting index, ending index)
//ending index not included
console.log(array.slice(1,3)); // o/p -> [ 'b', 'x' ]

//Reverse

array.reverse();
console.log(array); // o/p -> [ 'y', 'x', 'b', 'z' ]

//join - converts array to string
let str = array.join();
console.log(str); // o/p -> y,x,b,a


// split - Converts String to array
let str1 ="g,t,r,s";
let arr1 = str1.split(',');
console.log(arr1); // o/p -> [ 'g', 't', 'r', 's' ]

