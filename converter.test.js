const change = require('./converter.js')

test('return $0.00 when input is 0', () => {
    expect(change(0)).toEqual('$0.00');
});

test('return $ 0.03 when input is 1', () => {
    expect(change(1)).toEqual('$0.03');
});

test('return $ -0.03 when input is -1', () => {
    expect(change(-1)).toEqual('$-0.03');
});

test('return $ 0.06 when input is 2', () => {
    expect(change(2)).toEqual('$0.06');
});

test('return $ -0.06 when input is -2', () => {
    expect(change(-2)).toEqual('$-0.06');
});

test('return $ 0.09 when input is 3', () => {
    expect(change(3)).toEqual('$0.09');
});

test('return $ -0.09 when input is -3', () => {
    expect(change(-3)).toEqual('$-0.09');
});
