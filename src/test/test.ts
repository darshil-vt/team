const { addition } = require("../file.service");

test('Test', async () => {
    expect(addition(1, 2)).toBe(3);
    expect(addition(10, 20)).toBe(30);
    process.exit();
});
