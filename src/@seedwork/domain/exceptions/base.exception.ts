export abstract class BaseException extends Error {
  public readonly code: string;
  public readonly message: string;

  constructor(code: string, message: string) {
    super(message);
    this.name = new.target.name;
    this.code = code;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}
