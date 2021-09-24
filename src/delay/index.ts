const delay = (ms: number) => <T>(data: T): Promise<T> => (
  new Promise((resolve) => setTimeout(
    () => resolve(data),
    ms,
  ))
);

export default delay;
