const last = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);

const l2 = last(['a', 'b', 'c']);

const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, 6);
const v2 = makeArr('a', 'b');
const v3 = makeArr<string | null>('a', 5);

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  };
};

const v4 = makeFullName({ firstName: 'bob', lastName: 'junior', age: 15 });

// const v5 = makeFullName({ another: 'bob', lastName: 'junior', age: 15 });
