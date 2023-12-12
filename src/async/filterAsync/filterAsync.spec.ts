import test from 'jest-gwt';
import filterAsync from './filterAsync';

describe('async > filter', () => {
  test('filters', {
    given: {
      data,
      predicate,
    },
    when: {
      filtering,
    },
    then: {
      only_true_predicates_returned,
    },
  });
});

type Context = {
  data: string[],
  predicate: (e: string) => Promise<boolean>,

  result: string[]
};

function data(this: Context) {
  this.data = [
    'one',
    'three',
    'two',
    'four',
  ];
}

function predicate(this: Context) {
  this.predicate = (e: string) => Promise.resolve(e.length === 3);
}

async function filtering(this: Context) {
  this.result = await filterAsync(this.predicate, this.data);
}

function only_true_predicates_returned(this: Context) {
  expect(this.result).toEqual([
    'one',
    'two',
  ]);
}
