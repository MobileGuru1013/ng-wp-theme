import { Component, OnInit, ComponentFactoryResolver, ViewChild, Type, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { PageTemplateDirective } from './directives/page-template.directive';
import { MetaProvider } from '../shared/yoast-seo/meta-provider.interface';
import { MetaTagsCreator } from '../shared/yoast-seo/meta-tags-creator';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-base',
  template: '<ng-template page-template></ng-template>'
})
export class PageBaseComponent implements OnInit, OnDestroy, MetaProvider {
  private page: any;
  private routerChangeSubscription: any;
  @ViewChild(PageTemplateDirective) templateDirective: PageTemplateDirective;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private metaTagsCreator: MetaTagsCreator
  ) { }

  ngOnInit() {
    this.resolveTemplate();
    this.initRouterChangeSubscription();
  }

  initRouterChangeSubscription() {
    this.routerChangeSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.resolveTemplate();
      });
  }

  resolveTemplate() {
    const resolvedData = this.route.snapshot.data;

    if (resolvedData.page.length > 0 || resolvedData.page.id) {
      this.page = resolvedData.page[0] ? resolvedData.page[0] : resolvedData.page;
      const pageTemplate = this.page.template !== '' ? this.page.template : 'DefaultComponent';

      this.initMetaTags();
      this.loadTemplate(pageTemplate);
    } else {
      this.router.navigate(['error-404']);
    }
  }

  initMetaTags() {
    if (typeof this.page.yoast_meta !== 'undefined') {
      this.metaTagsCreator.createMetaTags(this.page.yoast_meta);
    }
  }

  loadTemplate(templateClassName) {
    const factories = Array.from(this.componentFactoryResolver['_factories'].keys());
    const factoryClass = <Type<any>>factories.find((x: any) => x.className === templateClassName);

    if (factoryClass !== undefined && typeof factoryClass === 'function') {
      const factory = this.componentFactoryResolver.resolveComponentFactory(factoryClass);
      this.templateDirective.viewContainerRef.detach();
      const componentRef = this.templateDirective.viewContainerRef.createComponent(factory);

      componentRef.instance.page = this.page;
    } else {
      console.error('Page template does not exists!');
    }
  }

  ngOnDestroy() {
    this.routerChangeSubscription.unsubscribe();
  }
}
