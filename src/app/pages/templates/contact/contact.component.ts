import { Component } from '@angular/core';
import { PageBaseTemplate } from '../page-base-template';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends PageBaseTemplate {
  public static readonly className = 'ContactComponent';

  constructor() {
    super();
  }
}
