//your code here
let evaluatedText = document.getElementById('evaluatedText')
let wordCount = document.getElementById('wordCount')

evaluatedText.onkeyup = function () {
    var spaceCount = 0;
    var text = evaluatedText.value.trim()
    for (let i = 0; i < text.length; i++) {
        if (text[i] != ' ' && text[i + 1] == ' ') {
            spaceCount++
        }
    }

    if (evaluatedText.value == '') {
        wordCount.innerText = 0
    }
    else{
        wordCount.innerText = spaceCount + 1
    }
}
