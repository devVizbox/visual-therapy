export const SKYLA_ACCESS_COOKIE = "skyla_test_access";

export function isSkylaAccessCookie(value: string | undefined): boolean {
  return value === "1";
}
