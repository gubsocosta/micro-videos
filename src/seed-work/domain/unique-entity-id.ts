import { v4 as uuidV4, validate as uuidValidate } from 'uuid';
import { InvalidUuidException } from './exceptions/invalid-uuid.exception';

export class UniqueEntityId {
  public readonly id: string;

  constructor(id?: string) {
    this.id = id || uuidV4();
    this.validate();
  }

  private validate() {
    const isValid = uuidValidate(this.id);
    if (!isValid) throw new InvalidUuidException();
  }
}
