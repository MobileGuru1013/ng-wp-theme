import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[page-template]',
})
export class PageTemplateDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
