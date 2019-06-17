import { Component } from '@angular/core';
import { PageBaseTemplate } from '../page-base-template';

@Component({
  selector: 'app-page-404',
  templateUrl: './page-404.component.html',
  styleUrls: ['./page-404.component.scss']
})
export class Page404Component extends PageBaseTemplate {
  public static readonly className = 'Page404Component';

  constructor() {
    super();
  }
}
