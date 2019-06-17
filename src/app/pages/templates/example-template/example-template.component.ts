import { Component } from '@angular/core';
import { PageBaseTemplate } from '../page-base-template';

@Component({
  selector: 'app-example-template',
  templateUrl: './example-template.component.html',
  styleUrls: ['./example-template.component.scss']
})
export class ExampleTemplateComponent extends PageBaseTemplate {
  public static readonly className = 'ExampleTemplateComponent';

  constructor() {
    super();
  }
}
