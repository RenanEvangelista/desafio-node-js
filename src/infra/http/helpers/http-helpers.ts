import { HttpResponse } from '../contracts/HttpResponse';

import { ServerError } from '@/errors';

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: new ServerError(error.stack || ''),
});

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  data: error,
});

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  data: error,
});

export const notfound = (error: Error): HttpResponse => ({
  statusCode: 404,
  data: error,
});
