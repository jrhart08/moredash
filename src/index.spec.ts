/* eslint-disable import/no-dynamic-require,global-require */
import test from 'jest-gwt';
import fs from 'fs';
import path from 'path';
import {
  filter,
  flow,
  forEach,
  fromPairs,
  get,
  identity,
  map,
  pickBy,
  zip,
} from 'lodash/fp';

describe('index', () => {
  test('all functions exported', {
    given: {
      moredash_functions,
    },
    when: {
      importing_moredash,
    },
    then: {
      all_functions_exported,
    },
  });
});

type Context = {
  functions: { [function_name: string]: any },
  index: any,
};

async function moredash_functions(this: Context) {
  const files = fs.readdirSync(__dirname);

  const fns = filter((fn: string) => fs.lstatSync(path.join(__dirname, fn)).isDirectory(), files);
  const promises = map((fn: string) => require(`./${fn}`), fns);
  const imported = map(
    get('default'),
    await Promise.all(promises),
  );

  this.functions = flow(
    zip(fns),
    fromPairs,
    pickBy(identity),
  )(imported);
}

async function importing_moredash(this: Context) {
  this.index = await require('./index');
}

function all_functions_exported(this: Context) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  forEach.convert({ cap: false })(
    (fn: any, name: string) => {
      try {
        expect(this.index[name]).toBe(fn);
      } catch {
        throw new Error(`Function ${name} was not exported by moredash`);
      }
    },
    this.functions,
  );
}
