class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(num) {
      if (isNaN(num)) {
        throw new Error('Invalid input: Not a number');
      }
      this.result += num;
    }
  
    subtract(num) {
      if (isNaN(num)) {
        throw new Error('Invalid input: Not a number');
      }
      this.result -= num;
    }
  
    multiply(num) {
      if (isNaN(num)) {
        throw new Error('Invalid input: Not a number');
      }
      this.result *= num;
    }
  
    divide(num) {
      if (isNaN(num)) {
        throw new Error('Invalid input: Not a number');
      }
      if (num === 0) {
        throw new Error('Invalid input: Division by zero');
      }
      this.result /= num;
    }
  
    clear() {
      this.result = 0;
    }
  
    getResult() {
      return this.result;
    }
  
    calculate(expression) {
      const tokens = expression.match(/\d+|\S/g) || [];
  
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
  
        if (token === '+' || token === '-' || token === '*' || token === '/') {
          continue;
        }
  
        if (!isNaN(parseFloat(token))) {
          this.add(parseFloat(token));
        } else if (token === '+') {
          this.add(parseFloat(tokens[i + 1]));
          i++; // Skip the next token as it's already processed
        } else if (token === '-') {
          this.subtract(parseFloat(tokens[i + 1]));
          i++;
        } else if (token === '*') {
          this.multiply(parseFloat(tokens[i + 1]));
          i++;
        } else if (token === '/') {
          this.divide(parseFloat(tokens[i + 1]));
          i++;
        } else {
          throw new Error('Invalid input: Non-numerical character detected');
        }
      }
    }
  
    // Test function to demonstrate usage
    static test() {
      const calculator = new Calculator();
  
      console.log("Input: '10 + 2 * (6 - (4 + 1) / 2) + 7'");
      try {
        calculator.calculate(10 + 2 * (6 - (4 + 1) / 2) + 7);
        console.log("Result:", calculator.getResult());
      } catch (error) {
        console.log("Error:", error.message);
      }
    }
  }
  
  // Execute the test function
  Calculator.test();
  