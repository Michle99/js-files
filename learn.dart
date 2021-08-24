// Define a function.
void printInteger(int aNumber) {
  print('The number is $aNumber.'); // Print to console.
}

// This is where the app starts executing.
void main() {
  int? a;
  var number = 42; // Declare and initialize a variable.
  printInteger(number); // Call a function.
  print(a);
  print(result);
}

//Fibonacci Numbers
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);

