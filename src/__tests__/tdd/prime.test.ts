
import { isPrime, listPrimesInRange } from '../../primeCalculator';

describe('isPrime', () => {
    test('retorna false per a números menors que 2', () => {
        expect(isPrime(1)).toBe(false);
    });


    test('identifica números no primers', () => {
        expect(isPrime(4)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(15)).toBe(false);
    });
    
    test('llista primers dins d\'un rang', () => {
        expect(listPrimesInRange(10, 30)).toEqual([11, 13, 17, 19, 23, 29]);
    });
});