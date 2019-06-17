import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsService } from '../posts.service';

@Injectable()
export class PostResolver implements Resolve<any> {
  private postsService: PostsService;

  constructor(private http: HttpClient) {
    this.postsService = new PostsService(http);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const optionalParams = {
      _embed: ''
    };

    return this.postsService.getBySlug(route.paramMap.get('slug'), optionalParams);
  }
}
