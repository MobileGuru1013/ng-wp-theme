import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WPServicesBase } from './wp-services-base';
import { Categories } from './interfaces/categories.interface';

@Injectable()
export class CategoriesService extends WPServicesBase implements Categories {
  constructor(http: HttpClient) {
    super(http);
  }

  getById(id: Number, params: Object = {}): Observable<any> {
    return this.http.get<any>(`categories/${id}`, { params: super.objToHttpParams(params) });
  }

  getBySlug(slug: String, params: Object = {}): Observable<any> {
    return this.http.get<any>(`categories?slug=${slug}`, { params: super.objToHttpParams(params) });
  }
}
