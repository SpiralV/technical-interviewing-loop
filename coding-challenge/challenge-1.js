swapStrCase = (string) => {
    let caseSwap = []
    for(i = 0; i < string.length; i++){
        if(string[i] == string[i].toUpperCase()){
            caseSwap.push(string[i].toLowerCase())
         } else {
            caseSwap.push(string[i].toUpperCase())
         }
    }
    return caseSwap.join('')
}

console.log(swapStrCase("Hello World!"))
