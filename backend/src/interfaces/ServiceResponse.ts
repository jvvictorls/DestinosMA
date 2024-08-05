export type ServiceMessage = {message: string};

export type ServiceResponseErrorType = 'INVALID_DATA' | 
'INTERNAL_ERROR' |
'NOT_FOUND' |
'CONFLICT' |
'UNAUTHORIZED'|
'BAD_REQUEST';

export type serviceResponseError = {
  status: ServiceResponseErrorType;
  data: ServiceMessage;
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL';
  data: T;
};


export type ServiceResponse<T> = ServiceResponseSuccess<T> | serviceResponseError;