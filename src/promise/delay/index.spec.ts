import delay from '.';

describe('delay', () => {
  describe('Given a wait time of...', () => {
    describe('50ms', () => {
      it('Should wait 50ms and pass data forward', async () => {
        const before = new Date();

        await Promise.resolve('abc')
          .then(delay(50))
          .then((abc) => {
            const after = new Date();
            const elapsedMs = after.getTime() - before.getTime();

            expect(elapsedMs).toBeGreaterThanOrEqual(48);
            expect(abc).toBe('abc');
          });
      });
    });

    describe('0ms', () => {
      it('Should wait 0ms and pass data forward', async () => {
        const before = new Date();

        await Promise.resolve('abc')
          .then(delay(0))
          .then((abc) => {
            const after = new Date();
            const elapsedMs = after.getTime() - before.getTime();

            expect(elapsedMs).toBeGreaterThanOrEqual(0);
            expect(abc).toBe('abc');
          });
      });
    });

    describe('-1ms', () => {
      it('Should wait 0ms and pass data forward', async () => {
        const before = new Date();

        await Promise.resolve('abc')
          .then(delay(-1))
          .then((abc) => {
            const after = new Date();
            const elapsedMs = after.getTime() - before.getTime();

            expect(elapsedMs).toBeGreaterThanOrEqual(0);
            expect(abc).toBe('abc');
          });
      });
    });
  });
});
