import test from 'jest-gwt';
import findAsync from './findAsync';

describe('async > find', () => {
  test('finds first match', {
    given: {
      data,
      predicate,
    },
    when: {
      finding,
    },
    then: {
      FIRST_true_predicate_returned,
    },
  });

  test('no match returns undefined', {
    given: {
      data,
      predicate_with_NO_MATCH,
    },
    when: {
      finding,
    },
    then: {
      result_is_UNDEFINED,
    },
  });
});

type Context = {
  data: string[],
  predicate: (e: string) => Promise<boolean>,

  result: string | undefined,
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

function predicate_with_NO_MATCH(this: Context) {
  this.predicate = (e: string) => Promise.resolve(e.length === 10);
}

async function finding(this: Context) {
  this.result = await findAsync(this.predicate, this.data);
}

function FIRST_true_predicate_returned(this: Context) {
  expect(this.result).toEqual('one');
}

function result_is_UNDEFINED(this: Context) {
  expect(this.result).toBeUndefined();
}
