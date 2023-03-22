// Test 1: The function returns the sequence [1, 1] if the input argument is 2.
const result1 = getFibonacci(2);
if (result1.toString() !== "1,1") {
    console.error("Test 1 failed: Expected [1, 1] but got", result1);
} else {
    console.log("Test 1 passed");
}

// Test 2: The function returns the sequence [1, 1, 2, 3, 5] if the input argument is 5.
const result2 = getFibonacci(5);
if (result2.toString() !== "1,1,2,3,5") {
    console.error("Test 2 failed: Expected [1, 1, 2, 3, 5] but got", result2);
} else {
    console.log("Test 2 passed");
}

// Test 3: The function called without argument or with any other data type other than a number returns "not allowed".
const result3a = getFibonacci();
if (result3a !== "not allowed") {
    console.error("Test 3a failed: Expected 'not allowed' but got", result3a);
} else {
    console.log("Test 3a passed");
}
const result3b = getFibonacci("abc");
if (result3b !== "not allowed") {
    console.error("Test 3b failed: Expected 'not allowed' but got", result3b);
} else {
    console.log("Test 3b passed");
}

// Test 4: The function called with n<1 or n>10 returns "not allowed".
const result4a = getFibonacci(-1);
if (result4a !== "not allowed") {
    console.error("Test 4a failed: Expected 'not allowed' but got", result4a);
} else {
    console.log("Test 4a passed");
}
const result4b = getFibonacci(11);
if (result4b !== "not allowed") {
    console.error("Test 4b failed: Expected 'not allowed' but got", result4b);
} else {
    console.log("Test 4b passed");
}
