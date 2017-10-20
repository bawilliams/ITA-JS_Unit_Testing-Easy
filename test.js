/* Easy: Create the tests below for a function that will take in two integer parameters.
• Write a test that will verify that the function returns the two integers multiplied together.
• Write a test that will verify that the function returns false if invalid parameters are passed in.
• Write a function that will make these tests succeed. */

var expect = require('chai').expect;

var integersMultiplied = function(n1, n2) {
  // Ensure that n1/n2 are integers and use 10 as the radix to convert from a decimal number
  // 10 is also the commonly used value with ES5 using as a default
  if (n1 === parseInt(n1, 10) && n2 === parseInt(n2, 10)) {
    return n1 * n2;
  } else {
    return false;
  }
};

describe('integersMultiplied', function() {
  it('should multiply these two numbers together', function() {
    expect(integersMultiplied(1,4)).to.be.equal(4);
  });
  it('should multiply only integers together', function() {
    expect(integersMultiplied(1,1.1)).to.be.false;
  });
});