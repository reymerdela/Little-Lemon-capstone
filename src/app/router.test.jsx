import { describe, test, expect } from "vitest";
import { initializeTimes, updateTimes } from "./router";

describe("initializeTimes", () => {
  test("should return the expected array of times", () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);

    times.forEach((time) => {
      expect(typeof time).toBe("string");
      expect(time).toMatch(/^(1[6-9]|2[0-3]):(00|30)$/);
    });
  });
});

describe("updateTimes", () => {
  test("should return the expected time based a given date", () => {
    const date = new Date(2025, 4, 19);
    const times = updateTimes(null, date);
    expect(times).toEqual([
      "17:00",
      "17:30",
      "18:30",
      "19:30",
      "20:30",
      "21:00",
      "22:00",
      "23:00",
    ]);
  });

  test("should return a different array of times for a different date", () => {
    const date1 = new Date(2025, 4, 5);
    const date2 = new Date(2025, 4, 20);
    const times1 = updateTimes(null, date1);
    const times2 = updateTimes(null, date2);
    console.log("Times 1: ", times1);
    console.log("Times 2: ", times2);

    expect(times1).not.toEqual(times2);
    expect(times1).toEqual([
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "20:00",
      "22:00",
      "22:30",
    ]);
    expect(times2).toEqual([
      "17:00",
      "17:30",
      "18:00",
      "19:00",
      "21:00",
      "22:00",
      "23:00",
    ]);
  });
});
