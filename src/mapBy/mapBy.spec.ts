import test from 'jest-gwt';
import {
  startsWith,
  upperCase,
} from 'lodash/fp';

import mapBy from './mapBy';

describe('map by', () => {
  test('filters and maps', {
    given: {
      predicate,
      array_contains_match,
      modifier,
    },
    when: {
      mapping_by,
    },
    then: {
      result_is_NEW_array,
      match_is_modified,
      NOT_matched_indexes_are_SAME,
    },
  });

  test('maps by shorthand', {
    given: {
      predicate_SHORTHAND,
      array_contains_match,
      modifier,
    },
    when: {
      mapping_by,
    },
    then: {
      result_is_NEW_array,
      match_is_modified,
      NOT_matched_indexes_are_SAME,
    },
  });

  test('maps MANY', {
    given: {
      predicate,
      array_contains_MANY_matches,
      modifier,
    },
    when: {
      mapping_by,
    },
    then: {
      result_is_NEW_array,
      ALL_matches_modified,
      NOT_matched_indexes_are_SAME,
    },
  });
});

type TestType = {
  value: string,
};

type Context = {
  array: TestType[],
  predicate: Parameters<typeof mapBy>[0],
  modifier: (v: TestType) => TestType,

  result: TestType[],
};

function predicate(this: Context) {
  this.predicate = (ele: TestType) => startsWith('map', ele.value);
}

function predicate_SHORTHAND(this: Context) {
  this.predicate = { value: 'map this' };
}

function array_contains_match(this: Context) {
  this.array = [
    { value: 'leave' },
    { value: 'map this' },
    { value: 'existing' },
  ];
}

function array_contains_MANY_matches(this: Context) {
  this.array = [
    { value: 'leave' },
    { value: 'map this' },
    { value: 'existing' },
    { value: 'map this too' },
    { value: 'and NOT this' },
  ];
}

function modifier(this: Context) {
  this.modifier = (v: TestType) => ({
    value: upperCase(v.value),
  });
}

function mapping_by(this: Context) {
  this.result = mapBy(
    this.predicate,
    this.modifier,
    this.array,
  );
}

function result_is_NEW_array(this: Context) {
  expect(this.result).not.toBe(this.array);
}

function match_is_modified(this: Context) {
  expect(this.result[1]).toEqual({ value: 'MAP THIS' });
}

function NOT_matched_indexes_are_SAME(this: Context) {
  expect(this.result[0]).toBe(this.array[0]);
  expect(this.result[2]).toBe(this.array[2]);
}

function ALL_matches_modified(this: Context) {
  expect(this.result[1]).toEqual({ value: 'MAP THIS' });
  expect(this.result[3]).toEqual({ value: 'MAP THIS TOO' });
}
