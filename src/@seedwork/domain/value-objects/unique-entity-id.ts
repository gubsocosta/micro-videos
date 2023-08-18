import { v4 as uuidV4, validate as uuidValidate } from 'uuid';
import { InvalidUuidException } from '../exceptions/invalid-uuid.exception';
import { ValueObject } from './value-object';

export class UniqueEntityId extends ValueObject<string> {
  constructor(id?: string) {
    super(id || uuidV4());
    this.validate();
  }

  private validate() {
    const isValid = uuidValidate(this.value);
    if (!isValid) throw new InvalidUuidException();
  }
}
