export const last = <T>(array: T[]) => array[array.length - 1];

export const sum = (array: number[]): number =>
  array.reduce((totalSum: number, currValue: number) => totalSum + currValue);

export const sumBy = <T>(array: T[], key: keyof T): number =>
  sum(array.map((element: T): number => element[key] as number));

export const uniq = <T>(items: T[]): T[] => [...new Set(items)];

export const mode = <T>(arr: T[]) => [...arr].sort((a, b) =>
  arr.filter(v => v === a).length
  - arr.filter(v => v === b).length,
).pop();
