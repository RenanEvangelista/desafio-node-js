export class InvalidParamError extends Error {
  constructor(paramName: string) {
    super(`Invalid param: ${paramName}`);
    this.name = 'InvalidParamError';

    Object.setPrototypeOf(this, InvalidParamError.prototype);
  }
}
