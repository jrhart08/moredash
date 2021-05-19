import moveWhere from '.';

describe('moveWhere', () => {
  describe('Given starting predicate finds a match', () => {
    describe('Given destination is a number', () => {
      it('Should move that element before the destination index', () => {
        const abcde = 'abcde'.split('');
        const eabcd = moveWhere((c) => c === 'e', 0, abcde);

        expect(eabcd.join('')).toBe('eabcd');
      });
    });

    describe('Given destination is a predicate', () => {
      describe('Given an element matches the destination predicate', () => {
        it('Should move the starting element before the destination index', () => {
          const abcde = 'abcde'.split('');
          const eabcd = moveWhere(
            (c) => c === 'e',
            (c) => c === 'a',
            abcde,
          );

          expect(eabcd.join('')).toBe('eabcd');
        });
      });

      describe('Given NO element matches the destination predicate', () => {
        it('Should return original array', () => {
          const abcde = 'abcde'.split('');
          const unchanged = moveWhere(
            (c) => c === 'e',
            (c) => c === 'f',
            abcde,
          );

          expect(unchanged).toBe(abcde);
        });
      });
    });
  });
});
