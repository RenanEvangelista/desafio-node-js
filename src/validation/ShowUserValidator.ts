import Joi from 'joi';
import Validator from './contracts/validator';
import adaptJoiError from './adapters/adaptJoiError';

export class ShowUserValidator implements Validator {
  validate(request: any): void {
    const schema = Joi.object({
      Authorization: Joi.string().uuid().required(),
    });

    const result = schema.validate(request);
    const { error } = result;

    adaptJoiError(error);
  }
}
