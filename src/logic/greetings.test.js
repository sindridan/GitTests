// greetings.test.js
const greeting = require('./greetings');
test("returns greeting with custom name", () => {
expect(greeting("Daði")).toBe("Hello, Daði!");
});