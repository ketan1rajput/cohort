/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let start=0;
    let end=str.length-1;
    let count = 0;
    while(start<end){
        if(str[start]!=str[end]){
            count=1
        }
        start++;
        end--;
    }
    if(count==1){
        console.log("This is not palindrome")
    }
    else{
        console.log("This is a palindrome");
    }
  }
  
  isPalindrome("ketan");
  module.exports = isPalindrome;