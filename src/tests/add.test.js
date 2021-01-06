const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should see a greeting with a name', () => { 
  const result = generateGreeting('Jenny');
  expect(result).toBe('Hello Jenny!');
});