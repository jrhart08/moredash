/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import partitionObject from '.';

describe('partitionObject', () => {
  let product: any;

  beforeEach(() => {
    product = {
      name: 'My Product',
      brand: 'My Brand',
      price: 50,
      stock: 10,
    };
  });

  describe('Given a key is found on the source object', () => {
    it('Should add that to the first partitioned object', () => {
      const [marketing, finance] = partitionObject(['name', 'brand'], product);

      expect(marketing).toEqual({
        name: 'My Product',
        brand: 'My Brand',
      });

      expect(finance).toEqual({
        price: 50,
        stock: 10,
      });
    });
  });

  describe('Given a key is not found on the object', () => {
    it('Should not appear in either partition', () => {
      const [named, notLastNamed] = partitionObject(['name', 'lastName'], product);

      expect('name' in named).toBe(true);
      expect('lastName' in named).toBe(false);

      expect('brand' in notLastNamed).toBe(true);
      expect('lastName' in notLastNamed).toBe(false);
    });
  });

  describe('Given an empty list of keys', () => {
    it('Then first partition should be empty', () => {
      const [empty, full] = partitionObject([], product);

      expect(empty).toEqual({});
      expect(full).toEqual(product);
    });
  });

  describe('Given a null list of keys', () => {
    it('Then first partition should be empty', () => {
      const [empty, full] = partitionObject(null, product);

      expect(empty).toEqual({});
      expect(full).toEqual(product);
    });
  });

  describe('Given an undefined list of keys', () => {
    it('Then first partition should be empty', () => {
      const [empty, full] = partitionObject(undefined, product);

      expect(empty).toEqual({});
      expect(full).toEqual(product);
    });
  });

  describe('Given an undefined source object', () => {
    it('Should return 2 empty objects', () => {
      const [one, two] = partitionObject(['name'], undefined);

      expect(one).toEqual({});
      expect(two).toEqual({});
    });
  });

  describe('Given a null source object', () => {
    it('Should return 2 empty objects', () => {
      const [one, two] = partitionObject(['name'], null);

      expect(one).toEqual({});
      expect(two).toEqual({});
    });
  });
});
