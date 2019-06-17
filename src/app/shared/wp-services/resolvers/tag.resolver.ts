import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TagsService } from '../tags.service';

@Injectable()
export class TagResolver implements Resolve<any> {
  private tagsService: TagsService;

  constructor(private http: HttpClient) {
    this.tagsService = new TagsService(http);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const optionalParams = {
      _embed: ''
    };

    return this.tagsService.getBySlug(route.paramMap.get('slug'), optionalParams);
  }
}
