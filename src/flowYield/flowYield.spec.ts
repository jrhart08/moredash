/* eslint-disable require-yield */
import test from 'jest-gwt';
import flowYield, {
  GeneratorFlow,
  TypedGeneratorFunction,
} from './flowYield';

describe('flow yield', () => {
  test('passes result to next yield', {
    given: {
      function_generators,
    },
    when: {
      flowing_generators,
    },
    then: {
      first_result_passes_to_second_generator,
      second_result_passes_to_third_generator,
      third_result_returned,
    },
  });

  test('takes initial argument', {
    given: {
      function_generators,
      first_argument,
    },
    when: {
      flowing_generators,
    },
    then: {
      first_argument_passed_to_first_generator,
    },
  });
});

type Context = {
  first_fn: TypedGeneratorFunction<string, number>,
  second_fn: TypedGeneratorFunction<number, string>,
  third_fn: TypedGeneratorFunction<{ some: string }, number>,
  first_arg: any,

  call_stack: Array<[string, any]>,
  result: { some: string },
};

function function_generators(this: Context) {
  const call_stack: Array<[string, any]> = [];
  this.call_stack = call_stack;

  this.first_fn = function* one(arg: number) {
    call_stack.push(['one', arg]);
    return '1';
  };

  this.second_fn = function* two(arg: string) {
    call_stack.push(['two', arg]);
    return 2;
  };

  this.third_fn = function* three(arg: number) {
    call_stack.push(['three', arg]);
    return {
      some: 'result',
    };
  };
}

function first_argument(this: Context) {
  this.first_arg = 0;
}

function flowing_generators(this: Context) {
  const gen = flowYield([
    this.first_fn,
    this.second_fn,
    this.third_fn,
  ])(this.first_arg);

  let result: IteratorResult<unknown, { some: string }> | undefined = undefined;

  while (!result?.done) {
    result = gen.next();
  }

  this.result = result.value;
}

function first_result_passes_to_second_generator(this: Context) {
  expect(this.call_stack[1])
    .toEqual(['two', '1']);
}

function second_result_passes_to_third_generator(this: Context) {
  expect(this.call_stack[2])
    .toEqual(['three', 2]);
}

function third_result_returned(this: Context) {
  expect(this.result)
    .toEqual({ some: 'result' });
}

function first_argument_passed_to_first_generator(this: Context) {
  expect(this.call_stack[0])
    .toEqual(['one', 0]);
}
