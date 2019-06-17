import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WPThemeServicesBase } from './wp-theme-services-base';
import { Email } from '../../pages/templates/contact/contact-form/email.model';

@Injectable()
export class EmailService extends WPThemeServicesBase {
  constructor(http: HttpClient) {
    super(http);
  }

  sendEmail(emailModel: Email, params: Object = {}): Observable<Email> {
    return this.http.post<Email>(`send-email`, emailModel, { params: super.objToHttpParams(params) });
  }
}
