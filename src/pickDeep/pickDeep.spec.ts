import test from 'jest-gwt';
import pickDeep from './pickDeep';

describe('pick deep', () => {
  test('picks shallow', {
    given: {
      shallow_paths,
      object,
    },
    when: {
      picking_deep,
    },
    then: {
      ONLY_shallow_paths_are_picked,
    },
  });

  test('picks deep', {
    given: {
      deep_paths,
      object,
    },
    when: {
      picking_deep,
    },
    then: {
      ONLY_deep_paths_are_picked,
    },
  });
});

function shallow_paths(this: any) {
  this.paths = ['a', 'b'];
}

function deep_paths(this: any) {
  this.paths = ['c.e.f'];
}

function object(this: any) {
  this.object = {
    a: 'first',
    b: 'second',
    c: {
      d: 'nested first',
      e: {
        f: 'deep nested first',
      },
    },
  };
}

function picking_deep(this: any) {
  this.result = pickDeep(this.paths, this.object);
}

function ONLY_shallow_paths_are_picked(this: any) {
  expect(this.result).toEqual({
    a: 'first',
    b: 'second',
  });
}

function ONLY_deep_paths_are_picked(this: any) {
  expect(this.result).toEqual({
    c: {
      e: {
        f: 'deep nested first',
      },
    },
  });
}
