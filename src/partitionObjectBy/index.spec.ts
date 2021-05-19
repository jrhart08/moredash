import { isNumber } from 'lodash';
import partitionObjectBy from '.';

describe('partitionObjectBy', () => {
  let product: any;

  beforeEach(() => {
    product = {
      name: 'My Product',
      brand: 'My Brand',
      price: 50,
      stock: 10,
    };
  });

  describe('Given a predicate', () => {
    it('Should evaluate that predicate on each property', () => {
      const [finance, marketing] = partitionObjectBy(isNumber, product);

      expect(marketing).toEqual({
        name: 'My Product',
        brand: 'My Brand',
      });

      expect(finance).toEqual({
        price: 50,
        stock: 10,
      });
    });

    describe('Given a predicate that takes 2 arguments', () => {
      it('Should pass the property value as argument 1, and the key as argument 2', () => {
        const isNameKey = (_, key) => key === 'name';
        const [hasName, hasOthers] = partitionObjectBy(isNameKey, product);

        expect(hasName).toEqual({
          name: 'My Product',
        });

        expect(hasOthers).toEqual({
          brand: 'My Brand',
          price: 50,
          stock: 10,
        });
      });
    });
  });
});
