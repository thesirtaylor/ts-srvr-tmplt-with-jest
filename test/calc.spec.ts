import { add } from "../src/services/calc.service";

describe("test add function", () => {
  it("Tests the sum of numbers", async () => {
    expect(add(2, 3)).toBe(5);
  });
});
