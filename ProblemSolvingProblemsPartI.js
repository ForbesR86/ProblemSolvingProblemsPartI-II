// Problems to solve using JavaScript
// Reverse a string
// Write code that takes a string as input and returns the string reversed
// i.e. “Hello” will be returned as “olleH”
function reverseWord(wordDrow){ 
	wordDrowCount = wordDrow.length
    let wordDrowResult = ""
    if (wordDrowCount == 0){
        console.log("Please enter something")
    }
    else{
        for(i = wordDrowCount - 1; i >= 0; i--){
            //console.log(wordDrow[i])
            wordDrowResult += wordDrow[i];
        }
        console.log(wordDrowResult)
    }
}
reverseWord("blackstone labs")
// Capitalize letter
// Write code that takes a string as input and capitalize the first letter of each word. Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”
//toUpperCase() begin 0 with uppercase, and next i with an uppercase
function capFirstWord(capFirstWordTest){ 
	capFirstWordCount = capFirstWordTest.length
    capFirstWordResult = ""
    if (capFirstWordCount == 0){
        console.log("Please enter something")
    }
    else{
        let makeCap = false
        for(i = 0; i < capFirstWordCount; i++){
            if (capFirstWordTest[i - 1] === " " && i > 0) {  //check previous spot for a space
                makeCap = true
            }

            if (i == 0 || makeCap == true){
                capFirstWordResult += capFirstWordTest.charAt(i).toUpperCase()
                makeCap = false
            }
            else{
                capFirstWordResult += capFirstWordTest[i]

            }
        }
        console.log(capFirstWordResult)
    }
}
capFirstWord("blackstone labs")

// Compress a string of characters
// For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"
function countRepLetters(repLetters){
    let iTotal = repLetters.length
    let compressedWord = ""
    let counterLetter = 0
    let newCompressedWord = ""
    for(i = 0; i < iTotal; i++){
        counterLetter++
        if(repLetters[i] != repLetters[i+1]){
            newCompressedWord += counterLetter + repLetters[i]
            counterLetter = 0
        }
    }
    //return newCompressedWord
    console.log(newCompressedWord)
}

countRepLetters('aaabbbbbccccaacccbbbaaabbbaaa')


// BONUS CHALLENGE: Palindrome
// A word, phrase, or sequence that reads the same backward as forward i.e. madam
// Write code that takes a user input and checks to see if it is a Palindrome and reports the result
function reverseStringFunction(word){
    let revsereString = ""
    for(let i = word.length -1; i>=0; i--){
        reverseString += word[i]
    }
    return reverseString
}
//Neven was here
function palindrome(wordToCheck){
    let reverseOfWordToCheck = reverseStringFunction(wordToCheck)

    if(reverseOfWordToCheck != wordToCheck){
        return false;
    }
    else{
        return true;
    }
}