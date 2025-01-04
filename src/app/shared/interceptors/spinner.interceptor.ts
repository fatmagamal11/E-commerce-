import { HttpInterceptorFn } from '@angular/common/http';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor is working!');

  return next(req);
};
