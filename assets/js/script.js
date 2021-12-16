(() => {
  // All variables
  const characterAmountRange = document.getElementById("characterAmountRange");
  const characterAmountNumber = document.getElementById(
    "characterAmountNumber"
  );
  const form = document.getElementById("generatorForm");
  const includeUppercaseElement = document.getElementById("includeUppercase");
  const includeNumbersElement = document.getElementById("includeNumbers");
  const includeSymbolsElement = document.getElementById("includeSymbols");
  const displayPassword = document.getElementById("displayPassword");

  // All Chararcters variables
  const LOWER_CHAR_CODE = fromLowToHigh(97, 122);
  const UPPER_CHAR_CODE = fromLowToHigh(65, 91);
  const NUMBER_CHAR_CODE = fromLowToHigh(48, 57);
  const SYMBOLS_CHAR_CODE = fromLowToHigh(33, 47)
    .concat(fromLowToHigh(58, 64))
    .concat(fromLowToHigh(91, 96))
    .concat(fromLowToHigh(123, 126));

  // Amount linked event
  characterAmountRange.addEventListener("input", synsAmount);
  characterAmountNumber.addEventListener("input", synsAmount);

  // Generate event
  form.addEventListener("submit", (e) => {
    // Prevent submit default behaviour;
    e.preventDefault();

    // Generate password
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
    displayPassword.innerText = password;
  });

  // Generate password function
  function generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  ) {
    let charCodes = LOWER_CHAR_CODE;
    if (includeUppercase) charCodes = charCodes.concat(UPPER_CHAR_CODE);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODE);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODE);

    const passwordCharacter = [];
    for (let i = 0; i < characterAmount; i++) {
      const characterCode =
        charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacter.push(String.fromCharCode(characterCode));
    }
    return passwordCharacter.join("");
  }

  // Generate low to high number method
  function fromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }

  // Amount function
  function synsAmount(e) {
    const value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
  }
})();

// ---------------------------------------------------------
