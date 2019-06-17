import { Observable } from 'rxjs';

export interface Tags {
  getBySlug(slug: String, params: Object): Observable<any>;
}
