
export const stringToBoolean = (v: unknown): v is boolean => v === "true";

export const booleanToString = (v: boolean): string => v ? "true" : "false";