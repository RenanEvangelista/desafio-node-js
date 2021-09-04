import Joi from 'joi';
import Validator from './contracts/validator';
import adaptJoiError from './adapters/adaptJoiError';

export class SignInValidator implements Validator {
  validate(request: any): void {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const result = schema.validate(request);
    const { error } = result;

    adaptJoiError(error);
  }
}
