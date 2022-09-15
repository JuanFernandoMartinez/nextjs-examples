
function invertString(word){
    let word2 = ""
    for (let i = word.length-1; i >= 0; i--){
        word2 += word.charAt(i)
    }

    return word2;
}

function sayHello(){
    return "hello"
}

export  {invertString, sayHello};