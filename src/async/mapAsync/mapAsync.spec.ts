import test from 'jest-gwt';
import mapAsync from './mapAsync';

describe('async > map', () => {
  test('maps all values', {
    given: {
      data,
      predicate,
    },
    when: {
      mapping,
    },
    then: {
      results_are_mapped_values,
    },
  });
});

type Context = {
  data: string[],
  predicate: (e: string) => Promise<number>,

  result: number[],
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
  this.predicate = (e: string) => Promise.resolve(e.length);
}

async function mapping(this: Context) {
  this.result = await mapAsync(this.predicate, this.data);
}

function results_are_mapped_values(this: Context) {
  expect(this.result).toEqual([
    3,
    5,
    3,
    4,
  ]);
}
