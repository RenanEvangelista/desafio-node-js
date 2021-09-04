export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`);
    this.name = 'MissingParamError';

    Object.setPrototypeOf(this, MissingParamError.prototype);
  }
}
