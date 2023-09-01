import { formatter, deformatter } from './formatter.js';
import { describe, it, expect } from "vitest";

describe('formatter', () => {

    it('should return a string with 3 spaces', () => {
        expect(formatter('1234567890123456')).toBe('1234 5678 9012 3456');
    });
    it('should return a string with 3 spaces', () => {
        expect(formatter('1234567890123456')).toBe('1234 5678 9012 3456');

    });

})

describe('deformatter', () => {


    it('should return a string with 3 spaces', () => {
        expect(deformatter('1234 5678 9012 3456')).toBe('1234567890123456');
    });
    it('should return a string with 3 spaces', () => {
        expect(deformatter('1234 5678 9012 3456')).toBe('1234567890123456');

    });

})