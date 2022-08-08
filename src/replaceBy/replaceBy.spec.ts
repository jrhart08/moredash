import test from 'jest-gwt';
import {
  startsWith,
} from 'lodash/fp';

import replaceBy from './replaceBy';

describe('replace by', () => {
  test('replaces by predicate', {
    given: {
      predicate,
      array_contains_match,
      replacement,
    },
    when: {
      replacing_by,
    },
    then: {
      result_is_NEW_array,
      match_is_replace_at_index,
      NOT_matched_indexes_are_SAME,
    },
  });

  test('replaces by shorthand', {
    given: {
      predicate_SHORTHAND,
      array_contains_match,
      replacement,
    },
    when: {
      replacing_by,
    },
    then: {
      result_is_NEW_array,
      match_is_replace_at_index,
      NOT_matched_indexes_are_SAME,
    },
  });

  test('replaces MANY', {
    given: {
      predicate,
      array_contains_MANY_matches,
      replacement,
    },
    when: {
      replacing_by,
    },
    then: {
      result_is_NEW_array,
      ALL_matches_replaced_at_index,
      NOT_matched_indexes_are_SAME,
    },
  });
});

type TestType = {
  value: string,
};

type Context = {
  array: TestType[],
  predicate: Parameters<typeof replaceBy>[0],
  replacement: TestType,

  result: TestType[],
};

function predicate(this: Context) {
  this.predicate = (ele: TestType) => startsWith('replace', ele.value);
}

function predicate_SHORTHAND(this: Context) {
  this.predicate = { value: 'replace this' };
}

function array_contains_match(this: Context) {
  this.array = [
    { value: 'leave' },
    { value: 'replace this' },
    { value: 'existing' },
  ];
}

function array_contains_MANY_matches(this: Context) {
  this.array = [
    { value: 'leave' },
    { value: 'replace this' },
    { value: 'existing' },
    { value: 'replace this' },
    { value: 'replace this' },
  ];
}

function replacement(this: Context) {
  this.replacement = {
    value: 'replacement',
  };
}

function replacing_by(this: Context) {
  this.result = replaceBy(
    this.predicate,
    this.replacement,
    this.array,
  );
}

function result_is_NEW_array(this: Context) {
  expect(this.result).not.toBe(this.array);
}

function match_is_replace_at_index(this: Context) {
  expect(this.result[1]).toEqual({ value: 'replacement' });
}

function NOT_matched_indexes_are_SAME(this: Context) {
  expect(this.result[0]).toBe(this.array[0]);
  expect(this.result[2]).toBe(this.array[2]);
}

function ALL_matches_replaced_at_index(this: Context) {
  expect(this.result[1]).toEqual({ value: 'replacement' });
  expect(this.result[3]).toEqual({ value: 'replacement' });
  expect(this.result[4]).toEqual({ value: 'replacement' });
}
