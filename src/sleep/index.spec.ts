import sleep from '.';

describe('sleep', () => {
  describe('Given a wait time of...', () => {
    describe('50ms', () => {
      it('Should wait 50ms', async () => {
        const before = new Date();
        await sleep(50);
        const after = new Date();

        const elapsedMs = after.getTime() - before.getTime();

        expect(elapsedMs).toBeGreaterThanOrEqual(48);
      });
    });

    describe('0ms', () => {
      it('Should wait 0ms', async () => {
        const before = new Date();
        await sleep(0);
        const after = new Date();

        const elapsedMs = after.getTime() - before.getTime();

        expect(elapsedMs).toBeGreaterThanOrEqual(0);
      });
    });

    describe('-1ms', () => {
      it('Should wait 0ms', async () => {
        const before = new Date();
        await sleep(-1);
        const after = new Date();

        const elapsedMs = after.getTime() - before.getTime();

        expect(elapsedMs).toBeGreaterThanOrEqual(0);
      });
    });
  });
});
