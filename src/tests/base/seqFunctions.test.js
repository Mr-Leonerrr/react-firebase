import {
    sum, 
    age, 
    returnObject,
    returnArray,
    isEven
} from '../../base/seqFunctions';

describe('Test seqFunctions', () => {
    describe('Sum tests', () => {
        test('should first', () => {     
            expect(sum(1, 2)).toBe(3);
        });
        
        test('sum two numbers, only one pass', () => {
            expect(sum(3)).toBe(3);
        });
        
        test('no args passed', () => {
            expect(sum()).toBe(0);
        });
    });

    describe('Age tests', () => {
        test('should first', () => {     
            expect(age(2002)).toBe(20);
        });
        
        test('no args passed', () => {
            expect(age()).toBe(0);
        });
    });

    describe('ReturnObject tests', () => {
        test('should first', () => {     
            expect(returnObject('John', 'Doe')).toEqual({
                name: 'John',
                lastName: 'Doe'
            });
        });
        
        test('no args passed', () => {
            expect(returnObject()).toEqual({
                name: '',
                lastName: ''
            });
        });
    });

    describe('ReturnArray tests', () => {
        test('should first', () => {
            expect(returnArray('John', 'Doe')).toEqual(['John', 'Doe']);
        });

        test('no args passed', () => {
            expect(returnArray()).toEqual(['', '']);
        });

        test('only one arg passed', () => {
            expect(returnArray('John')).toEqual(['John', '']);
        });
    });

    describe('IsEven tests', () => {
        test('should first', () => {     
            expect(isEven(2)).toBeTruthy();
        });
        
        test('Without args', () => {
            expect(isEven()).toBeFalsy();
        });

        test('Odd number passed', () => {
            expect(isEven(3)).toBeFalsy();
        });

        test('should third', () => {
            expect(isEven(4)).toBeTruthy();
        });

        test('String passed', () => {
            expect(isEven('4')).toBeTruthy();
        });
    });
});