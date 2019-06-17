import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WPServicesBase } from './wp-services-base';
import { Pages } from './interfaces/pages.interface';

@Injectable()
export class PagesService extends WPServicesBase implements Pages {
  constructor(http: HttpClient) {
    super(http);
  }

  getBySlug(slug: String, params: Object = {}): Observable<any> {
    return this.http.get<any>(`pages?slug=${slug}`, { params: super.objToHttpParams(params) });
  }

  getHomepage(params: Object = {}): Observable<any> {
    return this.http.get<any>(`frontpage`, { params: super.objToHttpParams(params) });
  }
}
