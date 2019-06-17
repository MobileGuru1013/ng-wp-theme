import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ACFServicesBase } from './acf-services-base';

@Injectable()
export class PagesService extends ACFServicesBase {
  constructor(http: HttpClient) {
    super(http);
  }

  getByID(id: Number, params: Object = {}): Observable<any> {
    return this.http.get<any>(`pages/${id}`, { params: super.objToHttpParams(params) });
  }
}
