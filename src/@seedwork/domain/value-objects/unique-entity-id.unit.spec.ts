import { validate as uuidValidate } from 'uuid';
import { InvalidUuidException } from '../exceptions/invalid-uuid.exception';
import { UniqueEntityId } from './unique-entity-id';

describe('UniqueEntityId Unit Tests', () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');

  beforeEach(() => {
    validateSpy.mockClear();
  });

  it('should throw an error when uuid is invalid', () => {
    expect(() => new UniqueEntityId('invalid uuid')).toThrow(
      InvalidUuidException
    );
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  it('should accept a uuid passed in constructor', () => {
    const sut = new UniqueEntityId('d864fb68-1473-44fa-bd33-93b3085e2dd5');
    expect(uuidValidate(sut.value)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  it('should create a UniqueEntityId without passing a uuid in the constructor', () => {
    const sut = new UniqueEntityId();
    expect(uuidValidate(sut.value)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });
});
