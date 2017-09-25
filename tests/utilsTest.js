import {
  convertToNumber,
  convertToRoman,
} from "../src/common/utils";


describe("ConvertToRoman", () => {
  const testCases = {
    0: "",
    "-123": "",
    12: "XII",
    3424: "MMMCDXXIV",
    123: "CXXIII",
    999: "CMXCIX",
    98: "XCVIII",
    38882: "",
    23299: "",
    3999: "MMMCMXCIX",
    5: "V",
    24: "XXIV",
    45: "XLV",
    444: "CDXLIV",
  };
  Object.keys(testCases).forEach(value =>
    test(`should convert ${value} to roman letters ${testCases[value]}`, () => {
      expect(convertToRoman(Number(value))).toBe(testCases[value]);
    }));
});

describe("ConvertToNumber", () => {
  const testCases = {
    XII: 12,
    MMMCDXXIV: 3424,
    CXXIII: 123,
    CMXCIX: 999,
    XCVIII: 98,
    MMMMMMMMMMMMMCXXIII: "",
    MMMMMMMMCDXLIV: "",
    MMMCMXCIX: 3999,
    V: 5,
    XXIV: 24,
    XLV: 45,
    CDXLIV: 444,
    ASDAXS: "",
    AAAAAFFFXIV: "",
    XIVA: "",
    "": "",
  };
  Object.keys(testCases).forEach(value =>
    test(`should convert romman letters ${value} to the number ${testCases[value]}`, () => {
      expect(convertToNumber(value)).toBe(testCases[value]);
    }));
});
