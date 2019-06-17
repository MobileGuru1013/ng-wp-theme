import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagesService } from '../pages.service';

@Injectable()
export class PageResolver implements Resolve<any> {
  private pagesService: PagesService;

  constructor(private http: HttpClient) {
    this.pagesService = new PagesService(http);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return route.paramMap.get('slug') ? this.pagesService.getBySlug(route.paramMap.get('slug')) : this.pagesService.getHomepage();
  }
}
