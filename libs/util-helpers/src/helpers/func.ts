export const toggleListItem = <T>(
  listItems: T[],
  item: T,
  property?: keyof T,
) => {
  if (property) {
    if (listItems.find((listItem) => listItem[property] === item[property])) {
      return listItems.filter(
        (listItem) => listItem[property] !== item[property],
      );
    }
  } else if (listItems.includes(item)) {
    return listItems.filter((listItem) => listItem !== item);
  }
  return [...listItems, item];
};

export const noop = () => null;
export const Noop = () => null;

export const buildQueryString = <T extends Record<string, any>>(query?: T) => {
  if (query) {
    const qs = Object.entries(query)
      .filter((pair) => pair[1] !== undefined)
      .map((pair) =>
        pair
          .filter((i) => i !== null)
          .map(encodeURIComponent)
          .join('='),
      )
      .join('&');

    return qs && `?${qs}`;
  }
  return '';
};

export const replacePathParams = <T extends Record<string, string>>(
  path: string,
  params?: T,
) =>
  Object.entries(params || {}).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, value),
    path,
  );

export function nonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

export const omit = <T extends Record<string, any>>(
  obj: T,
  keys: Array<keyof T>,
) =>
  Object.fromEntries(Object.entries(obj).filter((e) => !keys.includes(e[0])));

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const getEntries = <T extends object>(obj: T) =>
  Object.entries(obj) as Entries<T>;

export function isKeyOfObject<T extends object>(
  key: string | number | symbol,
  obj: T,
): key is keyof T {
  return key in obj;
}

type Falsy = false | 0 | '' | null | undefined;

export const isTruthy = <T>(x: T | Falsy): x is T => !!x;

export const compose = <T>(fn1: (a: T) => T, ...fns: Array<(a: T) => T>) =>
  fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1);

export const upperCaseFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export function tryCatch<T, U = Error>(
  promise: Promise<T>,
): Promise<[U, undefined] | [undefined, T]> {
  return promise
    .then<[undefined, T]>((data: T) => [undefined, data])
    .catch<[U, undefined]>((error: U) => [error, undefined]);
}

export const allSettledPromise = <T extends readonly unknown[] | []>(
  promises: T,
) => {
  const allSettled = new Promise<PromiseSettledResult<T>[]>((resolve) => {
    if (promises.length === 0) resolve([]);

    // Keep Count
    let settledCount = 0;

    // Keep Individual Results in Order
    const settlements: PromiseSettledResult<T>[] = Array<
      PromiseSettledResult<T>
    >(promises.length);

    // Attach to all promises in array
    promises.forEach((promise, index: number) => {
      (promise as Promise<T>)
        .then((value) => {
          settlements[index] = { status: 'fulfilled', value };
        })
        .catch((error: T) => {
          settlements[index] = { status: 'rejected', reason: error };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) {
            resolve(settlements);
          }
        });
    });
  });
  return allSettled;
};

export const base64ToByteArray = (base64String: string) => {
  const byteCharacters = atob(base64String);
  const byteNumbers: any[] = Array.from({ length: byteCharacters.length });

  for (let index = 0; index < byteCharacters.length; index++) {
    byteNumbers[index] = byteCharacters.codePointAt(index);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return byteArray;
};
export const createTimeoutPromise = (timeout: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });

export const getFirstCharsOfFirstAndLastWords = (sentence: string) => {
  const words = sentence
    .replace(/(?![\s])\W/g, ' ')
    .trim()
    .split(/\s+/);

  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  const firstCharOfFirstWord = words[0].charAt(0);
  const firstCharOfLastWord = words[words.length - 1].charAt(0);
  return (firstCharOfFirstWord + firstCharOfLastWord).toUpperCase();
};
