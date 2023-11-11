function reverseStr(str){
    var listOfChars = str.split('');
    var reverseListOfChars = listOfChars.reverse();

    var reverseStr = reverseListOfChars.join('');

    return reverseStr;
}

console.log(reverseStr("hello"));