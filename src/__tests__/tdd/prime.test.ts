
import { isPrime } from '../../primeCalculator';

describe('isPrime', () => {
    test('retorna false per a números menors que 2', () => {
        expect(isPrime(1)).toBe(false);
    });


    test('identifica números no primers', () => {
        expect(isPrime(4)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(15)).toBe(false);
    });
    
});