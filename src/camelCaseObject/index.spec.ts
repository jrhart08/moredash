import camelCaseObject from '.';

describe('camelCaseObject', () => {
  describe('Given an object', () => {
    describe('Given an object with PascalCase keys', () => {
      it('Should camelCase keys recursively', () => {
        const Person = {
          FirstName: 'Jonathan',
          LastName: 'Joestar',
          Successor: {
            FirstName: 'Joseph',
            LastName: 'Joestar',
            Successor: {
              FirstName: 'Jotaro',
              LastName: 'Kujo',
            },
          },
        };

        expect(camelCaseObject(Person)).toEqual({
          firstName: 'Jonathan',
          lastName: 'Joestar',
          successor: {
            firstName: 'Joseph',
            lastName: 'Joestar',
            successor: {
              firstName: 'Jotaro',
              lastName: 'Kujo',
            },
          },
        });
      });
    });

    describe('Given an object with snake_case keys', () => {
      it('Should camelCase keys recursively', () => {
        const per_son = {
          first_name: 'Jonathan',
          last_name: 'Joestar',
          successor: {
            first_name: 'Joseph',
            last_name: 'Joestar',
          },
        };

        expect(camelCaseObject(per_son)).toEqual({
          firstName: 'Jonathan',
          lastName: 'Joestar',
          successor: {
            firstName: 'Joseph',
            lastName: 'Joestar',
          },
        });
      });
    });
  });

  describe('Given an array', () => {
    it('Should camelCase each element recursively in the array', () => {
      const joestars = [
        {
          FirstName: 'Jonathan',
          LastName: 'Joestar',
          Successor: {
            FirstName: 'Joseph',
            LastName: 'Joestar',
          },
        },
        {
          first_name: 'Joseph',
          last_name: 'Joestar',
          successor: {
            first_name: 'Jotaro',
            last_name: 'Kujo',
          },
        },
      ];

      expect(camelCaseObject(joestars)).toEqual([
        {
          firstName: 'Jonathan',
          lastName: 'Joestar',
          successor: {
            firstName: 'Joseph',
            lastName: 'Joestar',
          },
        },
        {
          firstName: 'Joseph',
          lastName: 'Joestar',
          successor: {
            firstName: 'Jotaro',
            lastName: 'Kujo',
          },
        },
      ]);
    });
  });

  describe('Given any other value', () => {
    it('Should return that value', () => {
      expect(camelCaseObject(undefined)).toBe(undefined);
      expect(camelCaseObject(null)).toBe(null);
      expect(camelCaseObject('abc')).toBe('abc');
      expect(camelCaseObject(1)).toBe(1);
      expect(camelCaseObject(false)).toBe(false);
      expect(camelCaseObject(NaN)).toBeNaN();
    });
  });
});
