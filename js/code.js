function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

console.log("Expected output of maxTwo() is 8  " + myFunctionTest(8, function () {
    return maxTwo(2,8);
}));
console.log("Expected output of maxThree() is 12  " + myFunctionTest(12, function () {
    return maxThree(12,3,8);
}));
console.log("Expected output of maxThree() is 12  " + myFunctionTest(12, function () {
    return maxThree(12,3,8);
}));
console.log("Expected output of isVowel() is True  " + myFunctionTest(true, function () {
    return isVowel("e");
}));
console.log("Expected output of sum() is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));
console.log("Expected output of multiply() is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));
console.log("Expected output of reverse() is ideK  " + myFunctionTest("ideK", function () {
    return reverse("Kedi");
}));
console.log("Expected output of findLongestWord() is KampalaUganda  " + myFunctionTest("KampalaUganda", function () {
    return findLongestWord(["Kedi", "Kebba", "Wagobera", "Edgar", "Kampala", "KampalaUganda"]);
}));
console.log("Expected output of filterLongWords() is [\"Wagobera", "Kampala", "KampalaUganda\"] " + myFunctionTest(["Wagobera", "Kampala", "KampalaUganda"], function () {
    return filterLongWords(["Kedi", "Kebba", "Wagobera", "Edgar", "Kampala", "KampalaUganda"],5);
}));
console.log("Expected output of streamMap() is [ 10, 30, 50, 30, 30 ]  " + myFunctionTest([10, 30, 50, 30, 30], function () {
    return streamMap([1,3,5,3,3]);
}));
console.log("Expected output of streamFilter() is [ 3, 3, 3 ]  " + myFunctionTest([3,3,3 ], function () {
    return streamFilter([1,3,5,3,3]);
}));;
console.log("Expected output of streamReduce() is 135  " + myFunctionTest(135, function () {
    return streamReduce([1,3,5,3,3]);
}));;

//Question 2
function maxTwo(num1, num2){
    return (num1>num2)?num1:num2;
}

//Question 3:
function maxThree(num1, num2, num3){
    var max =  num1;
    if(num2>num1){
        max=num2;
    }
    if(num3>max){
        max = num3;
    }
    return max;
}

//Question 4:
function isVowel(character){
    var result = false;
    var vowels = ["A","E", "I", "O", "U", "a","e", "i", "o", "u"];

    for(i=0;i<vowels.length;i++){
        if(vowels[i]==character){
            result = true;
        }
    }
    return result;
}

//Question 5A:
function sum(nums){

    var result = nums[0];
 
    for(i=1;i<nums.length;i++){
        result = result + nums[i];
    }
    return result;
}
//Question 5B:
function multiply(nums){

    var result = nums[0];
 
    for(i=1;i<nums.length;i++){
        result = result * nums[i];
    }
    return result;
}

//Question 6:
function reverse(word){
    var result = "";
    for(i=word.length-1;i>=0;i--){
        result = result + word.charAt(i);
    }

    return result;
}

//Question 7:
function findLongestWord(wordArray){
    var longest = wordArray[0];
    for(i=1;i<wordArray.length;i++){
        if(wordArray[i].length>longest.length){
            longest = wordArray[i];
        }
    }
    return longest;

} 

//Question 8:
function filterLongWords(wordArray, number){
    var result = [];
    for(i=0;i<wordArray.length;i++){
        if(wordArray[i].length>number){
            result.push(wordArray[i]);
        }
    } 
    return result;
}

//Question 9A
function streamMap(a){
const b = a.map(function(elem, i, array) {
  return elem *10;
})
return b;
}

function streamFilter(a){
const c = a.filter(function(elem, i, array){
  return elem == 3;
})
return c;
}
function streamReduce(a){
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
})
return d;
}

