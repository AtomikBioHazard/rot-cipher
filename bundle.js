/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cipher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cipher */ \"./src/modules/cipher.js\");\n\n(0,_modules_cipher__WEBPACK_IMPORTED_MODULE_0__.cipherROT)();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/cipher.js":
/*!*******************************!*\
  !*** ./src/modules/cipher.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cipherROT\": () => (/* binding */ cipherROT)\n/* harmony export */ });\nfunction cipherROT() {\n  var d = document,\n      $form = d.querySelector(\".cipher-form\"),\n      $message = d.getElementById(\"cipher-tArea\").value.toLowerCase(),\n      $response = d.querySelector(\".cipher-response\"),\n      btnCipher = d.getElementById(\"cipher-btn\"),\n      btnDecipher = d.getElementById(\"decipher-btn\"); // Event delegation by asignating the function when the button is clicked\n\n  d.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    var $loader = d.querySelector(\".cipher-loader\"),\n        $rot = parseInt(d.getElementById(\"cipher-rot\").value); // Additional variables declaration\n\n    var rot = $rot,\n        encode = [],\n        alphabet = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"ñ\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\", \"y\", \"z\"],\n        index,\n        encoded = [];\n    $loader.classList.remove(\"none\"); // Displays the loader when the button is clicked\n\n    if (!$rot) rot = 13; // If no number is set to rotate the letters we assign a default value of 13\n\n    encode = $message.split(''); //The string is stored into an array\n\n    try {\n      // If there is no message in the textarea we trigger an \"error\" message\n      if (!$message) {\n        // Time out to simulate the \"processing time\"\n        setTimeout(function () {\n          $loader.classList.add(\"none\");\n          $form.reset();\n          $response.classList.remove(\"none\");\n          $response.innerHTML = \"There's nothing to be ciphered\";\n          setTimeout(function () {\n            $response.classList.add(\"none\");\n          }, 3000);\n        }, 3000);\n      } else {\n        // If there's a message then we cipher it\n        setTimeout(function () {\n          $loader.classList.add(\"none\");\n          $response.classList.remove(\"none\"); // We run a for within the array to cipher each letter\n\n          encode.forEach(function (el) {\n            var charCode = el.charCodeAt(); // returns the character code for each letter\n\n            if (charCode > 96 && charCode < 110) {\n              // we verify if it's in a certain range and then add the number passed in rot\n              index = alphabet.indexOf(el) + rot; // calculate the new index of the letter\n\n              encoded.push(alphabet[index]); // store the new character into another array\n            } else if (charCode > 109 && charCode < 123) {\n              index = alphabet.indexOf(el) - rot;\n              encoded.push(alphabet[index]);\n            }\n          });\n          $response.innerHTML = encoded.join(\"\"); // Print the resulting array into the designated area\n        }, 3000);\n      }\n    } catch (err) {\n      // Personalized error\n      $response.innerHTML = \"Sorry, there was an error, Please try again\";\n      console.error(\"Sorry, there was an error, Please try again\");\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/cipher.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;