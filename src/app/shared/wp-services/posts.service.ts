import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WPServicesBase } from './wp-services-base';
import { Posts } from './interfaces/posts.interface';

@Injectable()
export class PostsService extends WPServicesBase implements Posts {
  constructor(http: HttpClient) {
    super(http);
  }

  getList(params: Object = {}): Observable<any> {
    return this.http.get<any>('posts', { params: super.objToHttpParams(params) });
  }

  getBySlug(slug: String, params: Object = {}): Observable<any> {
    return this.http.get<any>(`posts?slug=${slug}`, { params: super.objToHttpParams(params) });
  }
}
