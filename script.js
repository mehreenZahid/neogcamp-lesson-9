function reverseStr(str){
    var listOfChars = str.split('');
    var reverseListOfChars = listOfChars.reverse();
    var reverseStr = reverseListOfChars.join('');

    return reverseStr;
}

function isPalindrome(str){
    var reverse = reverseStr(str);
    if(str === reverse){
        return true;
    }
    return false;
}

console.log(isPalindrome('404'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('momo'))