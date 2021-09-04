export class AccessDeniedError extends Error {
  constructor(customMessage = 'Access Denied') {
    super(customMessage);
    this.name = 'AccessDeniedError';

    Object.setPrototypeOf(this, AccessDeniedError.prototype);
  }
}
