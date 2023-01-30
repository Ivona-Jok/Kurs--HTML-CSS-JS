const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

// console.dir(productNameInputElement);

// const maxAllowedChars = productNameInputElement.maxLenght;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLenght = enteredText.lenght;
    
    const remainingCharacters = 60 - enteredTextLenght;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);