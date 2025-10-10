// jämför två värden med hjälp av olika comparison operators. resultatet av en sån expression är alltid en boolean

// ska ge tillbaka true
export function isEqual() {
  const value1 = 10;
  const value2 = "10";
}

// ska ge tillbaka false
export function isStrictlyEqual() {
  const value1 = 10;
  const value2 = "10";
}

// ska ge tillbaka false
export function isNotEqual() {
  const value1 = 10;
  const value2 = "10";
}

// ska ge tillbaka true
export function isStrictlyNotEqual() {
  const value1 = 10;
  const value2 = 9;
}

// ska ge tillbaka true
export function isGreaterThan() {
  const value1 = 10;
  const value2 = 9;
}

// ska ge tillbaka true
export function isLessThan() {
  const value1 = 10;
  const value2 = 9;
}

// ska ge tillbaka false
export function isGreaterOrEqual() {
  const value1 = 9;
  const value2 = 10;
}

// ska ge tillbaka true
export function isLessOrEqual() {
  const value1 = 10;
  const value2 = 10;
}
