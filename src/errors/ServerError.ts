export class ServerError extends Error {
  constructor(errorStack: string) {
    super(errorStack);
    this.name = 'ServerError';

    Object.setPrototypeOf(this, ServerError.prototype);
  }
}
