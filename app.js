// reverse a string
function reverseString (str) {
	let result = "";

	for(let i = str.length - 1; i >= 0; i--) {
		result += str[ i ];
	}
	return result;
};

// console.log(reverseString("bannana"));


// another example
const reverseString2 = (str) => {
	//  split will turn the string to an array, broken on the ""
	// you can only use .reverse on an array
	// .join the array after the reverse
	return str.split("").reverse().join("");
};

// console.log(reverseString2("Chris"));

// another example (how does this work?)
function reverseString3 (s) {
	function rev (s, len, o) {
		return (len === 0) ? o : rev(s, --len, (o += s[ len ]));
	}
	return rev(s, s.length, '');
}
// console.log(reverseString3("Eggs"));


// sum the nums
function sum2 (num) {
	let result = 0;
	while(num > result) {
		result += num;
		num--;
	}
}


// double all in the array
let array = [ 2, 3, 4, 5, 6 ];

function doubleAll (arr) {
	return arr.map(n => {
		return n * 2;
	});
}

// console.log(doubleAll(array));


// another double the array
function anotherDouble (arr) {
	let result = [];

	for(let i = 0; i < arr.length; i++) {
		result.push(arr[ i ] * arr[ i ]);
	}
	return result;
}

console.log(anotherDouble(array));
