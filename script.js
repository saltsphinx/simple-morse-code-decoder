const MORSE_CODE = {
    '-.': 'A',
}

decodeMorse = function (morseCode) {
    const morseMessage = morseCode.replace(/(^\s*|\s*$)/g, '').split(/\s{3}/g) //Regex in .replace to replace any spaces in the beginning or end of the message with empty.
    let returnMessage = ''
    for (let i = 0; i < morseMessage.length; i++) {
        const morseWord = morseMessage[i]
        const letterArray = morseWord.split(/\s/g)
        let returnWord = ''
        for (let j = 0; j < letterArray.length; j++) {
            if (MORSE_CODE[letterArray[j]]) {
                returnWord += MORSE_CODE[letterArray[j]]
            }
        }
        returnMessage += returnWord
        if (morseMessage[i + 1]) {
            returnMessage += ' '
        }
    };
    return returnMessage
}