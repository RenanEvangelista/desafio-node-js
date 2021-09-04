export class InvalidParamTypeError extends Error {
  constructor(paramName: string, paramType: string) {
    super(`Param ${paramName} must be a ${paramType}`);
    this.name = 'MissingParamError';

    Object.setPrototypeOf(this, InvalidParamTypeError.prototype);
  }
}
