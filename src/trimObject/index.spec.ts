import trimObject from '.';

describe('trimObject', () => {
  describe('Given nil properties on an object', () => {
    const person: any = {
      firstName: 'Jonathan',
      lastName: 'Joestar',
      stand: null,
    };

    it('Should return a new object without them', () => {
      expect(trimObject(person)).toEqual({
        firstName: 'Jonathan',
        lastName: 'Joestar',
      });
    });

    it('Should not alter the original object', () => {
      expect(trimObject(person)).not.toBe(person);
      expect(person).toEqual({
        firstName: 'Jonathan',
        lastName: 'Joestar',
        stand: null,
      });
    });
  });
});
