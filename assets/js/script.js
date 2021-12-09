(() => {
  const characterAmountRange = document.getElementById("characterAmountRange");
  const characterAmountNumber = document.getElementById(
    "characterAmountNumber"
  );
  const formBtn = document.getElementById("passwordGenerateBtn");
  const includeUppercaseElement = document.getElementById("includeUppercase");
  const includeNumbersElement = document.getElementById("includeNumbers");
  const includeSymbolsElement = document.getElementById("includeSymbols");

  const LOWER_CHAR_CODE = arrayFromLowToHigh(97, 122);
  const UPPERCASE_CHAR_CODE = arrayFromLowToHigh(65, 90);
  const NUMBER_CHAR_CODE = arrayFromLowToHigh(48, 57);
  const SYMBOL_CHAR_CODE = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));
  const passwordDisplay = document.getElementById("passwordDisplay");

  characterAmountRange.addEventListener("input", characterAmount);
  characterAmountNumber.addEventListener("input", characterAmount);

  formBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(
      characterAmount,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );
    passwordDisplay.innerText = password;
  });

  function generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  ) {
    const charCodes = LOWER_CHAR_CODE;
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODE);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODE);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODE);

    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
      const characterCode =
        charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join("");
  }

  function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }

  function characterAmount(e) {
    const value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
  }
})();
