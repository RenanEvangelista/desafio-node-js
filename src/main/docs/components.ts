import { badRequest, notFound, serverError, unauthorized } from './components/';

import { securitySchemes } from './schemas/';

export default {
  badRequest,
  unauthorized,
  notFound,
  serverError,
  securitySchemes,
};
