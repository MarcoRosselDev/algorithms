(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();

/* los veneficions de esta logica son los siguientes:

It creates an extra scope of variables, which helps to confine variables to the place where they 
are useful.
It is now an expression instead of a sequence of statements. This allows you to write complex 
computation logic when initializing variables.
*/