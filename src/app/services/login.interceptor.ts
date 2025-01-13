import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  if (
    req.url.includes('/devices/statistics/') &&
    localStorage.getItem('token') !== null
  ) {
    req = req.clone({
      headers: req.headers.append(
        'Authorization',
        localStorage.getItem('token')!
      ),
    });

    return next(req);
  }
  return next(req);
};
