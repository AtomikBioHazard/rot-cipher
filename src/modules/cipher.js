export function cipherROT(){
  const d = document,
    $form = d.querySelector(".cipher-form"),
    $message = d.getElementById("cipher-tArea").value.toLowerCase(),
    $response = d.querySelector(".cipher-response"),
    btnCipher = d.getElementById("cipher-btn"),
    btnDecipher = d.getElementById("decipher-btn");

  // Event delegation by asignating the function when the button is clicked
  d.addEventListener("submit", (e) => {
    e.preventDefault();

    const $loader = d.querySelector(".cipher-loader"),
      $rot = parseInt(d.getElementById("cipher-rot").value);

    // Additional variables declaration
    let rot = $rot,
      encode = [],
      alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"],
      index,
      encoded = [];

    $loader.classList.remove("none"); // Displays the loader when the button is clicked

    if (!$rot) rot = 13; // If no number is set to rotate the letters we assign a default value of 13

    encode = $message.split(''); //The string is stored into an array

    try {
      // If there is no message in the textarea we trigger an "error" message
      if (!$message) {
        // Time out to simulate the "processing time"
        setTimeout(() => {
          $loader.classList.add("none");
          $form.reset();
          $response.classList.remove("none");
          $response.innerHTML = "There's nothing to be ciphered";
          setTimeout(() => {
            $response.classList.add("none");
          }, 3000);
        }, 3000);
      } else { // If there's a message then we cipher it
        setTimeout(() => {
          $loader.classList.add("none");
          $response.classList.remove("none");

          // We run a for within the array to cipher each letter
          encode.forEach((el) => {
            let charCode = el.charCodeAt(); // returns the character code for each letter
            if (charCode > 96 && charCode < 110) { // we verify if it's in a certain range and then add the number passed in rot
              index = alphabet.indexOf(el) + rot; // calculate the new index of the letter
              encoded.push(alphabet[index]); // store the new character into another array
            } else if (charCode > 109 && charCode < 123) {
              index = alphabet.indexOf(el) - rot;
              encoded.push(alphabet[index]);
            }
          });

          $response.innerHTML = encoded.join(""); // Print the resulting array into the designated area
        }, 3000);
      }
    } catch (err) { // Personalized error
      $response.innerHTML = "Sorry, there was an error, Please try again";
      console.error("Sorry, there was an error, Please try again")
    }
  });
}