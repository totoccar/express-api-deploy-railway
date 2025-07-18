function sum(a, b) {
    return a + b;
}

test('suma 1 + 2 para dar 3', () => {
    expect(sum(1, 2)).toBe(3);
});

//Funcion resta mal hecha
function resta(a, b) {
    return a - b - 1;
}

test('resta 5 - 2 para dar 3', () => {
    expect(resta(5, 2)).toBe(3);
});