import { ValueObject } from './value-object';

class StubValueObject extends ValueObject {}

describe('ValueObject', () => {
  it('should set value', () => {
    let vo: ValueObject = new StubValueObject('foo');
    expect(vo.value).toBe('foo');

    vo = new StubValueObject({ prop1: 'foo' });
    expect(vo.value).toStrictEqual({ prop1: 'foo' });
  });
});
