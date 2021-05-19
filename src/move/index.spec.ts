import move from '.';

describe('move', () => {
  describe('Should return an empty array when...', () => {
    it('Given array is null', () => {
      expect(move(1, 2, null)).toEqual([]);
    });

    it('Given array is undefined', () => {
      expect(move(1, 2, undefined)).toEqual([]);
    });

    it('Given array is empty', () => {
      expect(move(1, 2, [])).toEqual([]);
    });
  });

  describe('Given the start index is within the array', () => {
    describe('Given the destination index is within the array', () => {
      describe('Given start > destination', () => {
        it('Should move the start element to the destination index', () => {
          const qwerty = ['q', 'w', 'e', 'r', 't', 'y'];
          const qwyert = move(5, 2, qwerty);

          expect(qwyert.join('')).toBe('qwyert');
        });
      });

      describe('Given start < destination', () => {
        it('Should move the start element to the destination index', () => {
          const dvorak = ['d', 'v', 'o', 'r', 'a', 'k'];
          const vorakd = move(0, 5, dvorak);

          expect(vorakd.join('')).toBe('vorakd');
        });
      });

      describe('Given start = destination', () => {
        it('Should return a new array in the same order', () => {
          const abcde = ['a', 'b', 'c', 'd', 'e'];

          expect(move(1, 1, abcde)).toEqual(abcde);
        });
      });
    });

    describe('Given the destination index is NOT within the array', () => {
      it('Should return the original array', () => {
        const abcde = 'abcde'.split('');

        expect(move(0, 5, abcde)).toBe(abcde);
      });
    });
  });

  describe('Given start index is NOT within the array', () => {
    it('Should return the original array', () => {
      const abcde = 'abcde'.split('');

      expect(move(-1, 3, abcde)).toBe(abcde);
    });
  });
});
