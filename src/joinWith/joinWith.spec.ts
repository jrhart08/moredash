import test from 'jest-gwt';
import joinWith from './joinWith';

describe('join with', () => {
  test('simple', {
    given: {
      arrays,
      separator,
    },
    when: {
      joining_with_separator,
    },
    then: {
      result_is_arrays_joined_with_separator,
    },
  });

  test('one array does NOT insert separator', {
    given: {
      ONLY_ONE_array,
      separator,
    },
    when: {
      joining_with_separator,
    },
    then: {
      result_does_NOT_have_separator,
    },
  });
});

type Context = {
  arrays: string[][],
  separator: symbol,

  result: (string | symbol)[],
};

function arrays(this: Context) {
  this.arrays = [
    ['cat', 'dog'],
    ['fish', 'camel'],
  ];
}

function ONLY_ONE_array(this: Context) {
  this.arrays = [
    ['cat', 'dog'],
  ];
}

function separator(this: Context) {
  this.separator = Symbol.for('separator');
}

function joining_with_separator(this: Context) {
  this.result = joinWith(this.separator, this.arrays);
}

function result_is_arrays_joined_with_separator(this: Context) {
  expect(this.result).toEqual([['cat', 'dog'], Symbol.for('separator'), ['fish', 'camel']]);
}

function result_does_NOT_have_separator(this: Context) {
  expect(this.result).not.toContain(Symbol.for('separator'));
}
