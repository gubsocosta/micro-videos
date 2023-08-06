import { BaseException } from './base.exception';

export class InvalidUuidException extends BaseException {
  constructor() {
    super('invalid_uuid', 'ID must be a valid UUID');
  }
}
