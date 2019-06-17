import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MetaProvider } from '../../shared/yoast-seo/meta-provider.interface';
import { MetaTagsCreator } from '../../shared/yoast-seo/meta-tags-creator';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit, MetaProvider {
  public tag: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private metaTagsCreator: MetaTagsCreator
  ) { }

  ngOnInit() {
    const resolvedData = this.route.snapshot.data;

    if (resolvedData.tag.length > 0) {
      this.tag = resolvedData.tag[0];
      this.initMetaTags();
    } else {
      this.router.navigate(['error-404']);
    }
  }

  initMetaTags() {
    if (typeof this.tag.yoast_meta !== 'undefined') {
      this.metaTagsCreator.createMetaTags(this.tag.yoast_meta);
    }
  }
}
