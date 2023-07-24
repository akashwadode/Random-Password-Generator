/* ----------------------------- arrays ------------------------------ */


const passwordContext = document.getElementById('password-context');
const copyTextBtn = document.getElementById('copy-btn');

function copyText() {
    let textRange = document.createRange();
    textRange.selectNode(passwordContext);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(textRange);
    document.execCommand('copy');
    selection.removeAllRanges();
    console.log(passwordContext.textContent);
   
}
function generatePassword() {

    let temp = "";
    for (let i = 1; i <= 12; i++) {
        let randomNum = Math.floor(Math.random() * (5 - 1) + 1);
        if (i === 1) {
            randomNum = 2;
        }
        // console.log(randomNum);
        switch (randomNum) {
            case 1: temp += uppercaseChar();
                break;

            case 2: temp += lowercaseChar();
                break;

            case 3: temp += numbers();
                break;

            case 4: temp += symbols();

        }
        console.log(`${i} - ${temp}`);

    }
    passwordContext.innerHTML = temp;
}



function uppercaseChar() {
    return String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65));
}
function lowercaseChar() {
    return String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97));
}
function numbers() {
    return (Math.floor(Math.random() * 10));
}
function symbols() {
    return String.fromCharCode(Math.floor(Math.random() * (39 - 35) + 35));
}