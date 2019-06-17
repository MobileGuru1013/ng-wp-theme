import { Observable } from 'rxjs';

export interface Pages {
  getBySlug(slug: String, params: Object): Observable<any>;
}
