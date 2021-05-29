/* eslint-disable no-plusplus */
import lazy from '.';

describe('lazy', () => {
  it('Should evaluate once', () => {
    let invokeCount = 0;

    const lazyLoaded = lazy(() => ++invokeCount);

    expect(typeof lazyLoaded).toBe('function');
    expect(lazyLoaded()).toBe(1);
    expect(lazyLoaded()).toBe(1);
  });
});
