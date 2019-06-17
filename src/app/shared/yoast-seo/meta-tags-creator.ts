import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class MetaTagsCreator {
  constructor(private meta: Meta) {}

  private removeEmptyTagsFilter(el) {
    return el.content !== '';
  }

  createMetaTags(metaTags: any[]) {
    this.meta.addTags(metaTags.filter(this.removeEmptyTagsFilter));
  }
}
