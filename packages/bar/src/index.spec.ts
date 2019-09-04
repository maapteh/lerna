import { bar } from './';

describe('Bar', () => {
    test('works correctly', () => {
        let output;
        const log = (inputs: string) => {
            output = inputs;
        };
        console['log'] = jest.fn(log);

        const result = bar();
        expect(result).toBeTruthy();
        expect(output).toBe('Hello');
    });
});
