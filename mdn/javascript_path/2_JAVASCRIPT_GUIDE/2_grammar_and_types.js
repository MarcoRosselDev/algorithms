(function () {
  "use strict"
  console.log("another phras");
  
  /* comments 
  in blocks.
  2. we can scape the character *\/ with this \ sign.
  3. let x is a declaration variable
  4. = 33 is the asignation variable
  5. before that asignation the value of the variable x was undefined
  6. the variable declared with const can not be declared without assign a value
      if you do that, there will be a sintax error.
  7. var is a variable that can be accesed trought all the scope in the document, so be carrefull.
  */
  let x = 33;

  // DATA TYPES

  /* LITERALS number and bitInt

  0, 117, 123456789123456789n             (decimal, base 10)
  015, 0001, 0o777777777777n              (octal, base 8)
  0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
  0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
  */

  // sintaxis de un flotante con exponente
  // [digits].[digits][(E|e)[(+|-)]digits]
  /* ejemplo:
  3.1415926
  .123456789
  3.1E+12
  .1e-23 */
  
  const obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for 'handler: handler'
    handler,
    // Methods
    toString() {
      // Super calls
      return `d ${super.toString()}`;
    },
    // Computed (dynamic) property names
    ["prop_" + (() => 42)()]: 42,
  };
  console.log(obj.handler, obj.toString());
  

})()