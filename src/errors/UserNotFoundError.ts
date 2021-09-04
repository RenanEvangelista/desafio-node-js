export class UserNotFoundError extends Error {
  constructor() {
    super('User not found');
    this.name = 'UserNotFoundError';

    Object.setPrototypeOf(this, UserNotFoundError.prototype);
  }
}
