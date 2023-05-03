import { describe, it, assert } from "vitest";
import { validateCC } from "./validateCC";


describe("validateCC", () => {
  it('should return true if the credit card number is valid', () => {
    assert(validateCC('4129253190710627'));
  });
});