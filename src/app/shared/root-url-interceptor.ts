
import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RootUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = req.params.get('apiBaseUrl');

    req.params.delete('apiBaseUrl');
    req = req.clone({
      url: url + req.url
    });

    return next.handle(req);
  }
}
