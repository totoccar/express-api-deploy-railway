function sum(a, b) {
    return a + b;
}

test('suma 1 + 2 para dar 3', () => {
    expect(sum(1, 2)).toBe(3);
});
