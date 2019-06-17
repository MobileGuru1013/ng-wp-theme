import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WPServicesBase } from './wp-services-base';
import { Tags } from './interfaces/tags.interface';

@Injectable()
export class TagsService extends WPServicesBase implements Tags {
  constructor(http: HttpClient) {
    super(http);
  }

  getBySlug(slug: String, params: Object = {}): Observable<any> {
    return this.http.get<any>(`tags?slug=${slug}`, { params: super.objToHttpParams(params) });
  }
}
