const dec2hex = (dec: number) =>
  dec < 10 ? "0" + String(dec) : dec.toString(16);

export const generateId = (len?: number): string => {
  const array = new Uint8Array((len ?? 40) / 2);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join("") as string;
};
