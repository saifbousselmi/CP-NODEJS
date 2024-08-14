const generatePassword = require('generate-password');
function generateRandomPassword() {
    // Customize the password settings as needed
    const password = generatePassword.generate({
      length: 12,         // Length of the password
      numbers: true,      // Include numbers
      symbols: true,      // Include symbols
      uppercase: true,   // Include uppercase letters
      excludeSimilarCharacters: true 
    });

    return password;
  }
  console.log('Generated Password:', generateRandomPassword());
