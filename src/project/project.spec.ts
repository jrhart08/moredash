import test from 'jest-gwt';

import {
  flow,
  get,
  reject,
  noop,
  keys,
} from 'lodash/fp';

import project from './project';

describe('lodash extensions > simple map', () => {
  test('maps simple object', {
    given: {
      simple_map,
      object,
    },
    when: {
      projecting,
    },
    then: {
      values_are_projected,
    },
  });

  test('path projection sets deep value', {
    given: {
      map_with_DEEP_PATHS,
      object,
    },
    when: {
      projecting,
    },
    then: {
      values_are_projected_AT_PATH,
    },
  });
});

function simple_map(this: any) {
  this.map = {
    first: get('first'),
    second: flow(
      get('second'),
      reject('deleted'),
    ),
    third: get('third'),
  };
}

function map_with_DEEP_PATHS(this: any) {
  this.map = {
    'nested.first': get('first'),
    'nested.anotherLayer.something': get('first'),
    anotherPath: keys,
  };
}

function object(this: any) {
  this.obj = {
    first: 'one',
    second: [{
      deleted: true,
      value: 'a value',
    }, {
      value: 'not deleted',
    }],
    third: noop,
  };
}

function projecting(this: any) {
  this.result = project(this.map, this.obj);
}

function values_are_projected(this: any) {
  expect(this.result.first).toEqual('one');
  expect(this.result.second).toEqual([{ value: 'not deleted' }]);
  expect(this.result.third).toEqual(noop);
}

function values_are_projected_AT_PATH(this: any) {
  expect(this.result.nested.first).toEqual('one');
  expect(this.result.nested.anotherLayer.something).toEqual('one');
  expect(this.result.anotherPath).toEqual(['first', 'second', 'third']);
}
