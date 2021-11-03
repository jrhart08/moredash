/* eslint-disable @typescript-eslint/no-explicit-any */
export type TypedGeneratorFunction<TResult = unknown, TArg = any | undefined> = (
  (arg: TArg) => Generator<unknown, TResult>
);
export type GeneratorFlow<TResult = any, TInitial = any> = [
  TypedGeneratorFunction<any, TInitial>,
  ...Array<TypedGeneratorFunction>,
  TypedGeneratorFunction<TResult, any>,
];

function* step<TResult = unknown, TArg = any>(
  gen: TypedGeneratorFunction<TResult>,
  generators: TypedGeneratorFunction[],
  arg?: TArg,
): Generator<unknown, TResult> {
  const result = yield* gen(arg);

  const [next, ...rest] = generators;

  if (!next) {
    return result;
  }

  return (
    yield* step(next, rest, result)
  ) as TResult;
}

export default function flowYield<TResult = unknown, TInitial = any>(
  generators: GeneratorFlow<TResult, TInitial>,
): TypedGeneratorFunction<TResult, TInitial> {
  const [gen, ...rest] = generators;

  return ((arg?: TInitial) => (
    step(
      gen as TypedGeneratorFunction,
      rest,
      arg,
    )
  )) as unknown as TypedGeneratorFunction<TResult, TInitial>;
}
