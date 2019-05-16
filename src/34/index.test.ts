import { getClosestPalindrome } from "./index";

it("Call getClosestPalindrome('google')", () => {
  expect(getClosestPalindrome("google")).toBe("elgoogle");
});

it("Call getClosestPalindrome('race')", () => {
  expect(getClosestPalindrome("race")).toBe("ecarace");
});
