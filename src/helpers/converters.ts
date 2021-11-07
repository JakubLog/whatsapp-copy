export const convertToName = (value: string): string => {
  const firstLetter = value.charAt(0).toUpperCase();
  const restOfValue = value.substr(1);
  return `${firstLetter}${restOfValue}`;
};
