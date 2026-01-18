const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]


let lengthRange = document.getElementById('lengthRange')
let lengthValue = document.getElementById('lengthValue')
let passwordOutput = document.getElementById('passwordOutput')

lengthRange.addEventListener("input", ()=>{
    lengthValue.textContent = lengthRange.value
})

function addPasswords() {
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;
    const passwordLength = parseInt(lengthRange.value);

    let tempBuckets = [];

    tempBuckets.push(characters);

    if (includeNumbers) tempBuckets.push(numbers);
    if (includeSpecialChars) tempBuckets.push(specialChars);

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        let tempItem = tempBuckets[Math.floor(Math.random() * tempBuckets.length)];
        password += tempItem[Math.floor(Math.random() * tempItem.length)];
    }
    passwordOutput.value = password;
}


const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {
  if (!passwordOutput.value) return;

  navigator.clipboard.writeText(passwordOutput.value)
    .then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 1500);
    })
    .catch(err => {
      console.error("Failed to copy:", err);
    });
});
