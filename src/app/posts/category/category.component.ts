import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MetaProvider } from '../../shared/yoast-seo/meta-provider.interface';
import { MetaTagsCreator } from '../../shared/yoast-seo/meta-tags-creator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, MetaProvider {
  public category: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private metaTagsCreator: MetaTagsCreator
  ) { }

  ngOnInit() {
    const resolvedData = this.route.snapshot.data;

    if (resolvedData.category.length > 0) {
      this.category = resolvedData.category[0];
      this.initMetaTags();
    } else {
      this.router.navigate(['error-404']);
    }
  }

  initMetaTags() {
    if (typeof this.category.yoast_meta !== 'undefined') {
      this.metaTagsCreator.createMetaTags(this.category.yoast_meta);
    }
  }
}
