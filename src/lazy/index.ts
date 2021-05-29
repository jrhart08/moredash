const lazy = <T>(factory: () => T): () => T => {
  let value: T;
  let evaluated = false;

  return (): T => {
    if (evaluated) {
      return value;
    }

    value = factory();
    evaluated = true;

    return value;
  };
};

export default lazy;
