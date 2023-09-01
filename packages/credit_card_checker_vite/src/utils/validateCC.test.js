import { describe, it, assert, expect } from "vitest";
import { validateCC } from "./validateCC";


describe("validateCC", () => {
  it('should return true if the credit card number is valid', () => {
    assert(validateCC('4129253190710627'));
  });

  it('should return false for empty input', () => {
    const input = '';
    expect(validateCC(input)).toBe(false);
  });
  it('should return false for inputs > 16 digits', () => {
    const input = '12345678901234567';
    expect(validateCC(input)).toBe(false);
  });



});
