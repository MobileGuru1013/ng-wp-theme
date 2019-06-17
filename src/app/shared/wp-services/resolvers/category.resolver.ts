import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesService } from '../categories.service';

@Injectable()
export class CategoryResolver implements Resolve<any> {
  private categoriesService: CategoriesService;

  constructor(private http: HttpClient) {
    this.categoriesService = new CategoriesService(http);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const optionalParams = {
      _embed: ''
    };

    return this.categoriesService.getBySlug(route.paramMap.get('cat-slug'), optionalParams);
  }
}
