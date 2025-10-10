// skapa funktionerna som anropas i myCalculator eller returnera aritmetiska expressions direkt i caset
// lägg in en safeguard så att det inte går att dela med noll. returnera då istället texten "Kan inte dela med noll"

export function myCalculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return myAddFunction(num1, num2);

    case "-":
      return mySubtractFunction(num1, num2);

    case "*":
      return myMultiplyFunction(num1, num2);

    case "/":
      return myDivisionFunction(num1, num2);

    default:
      return "Error operator not found!";
  }
}
