import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { PageBaseTemplate } from '../page-base-template';
import { GalleryInjectorService } from '../../../shared/gallery/gallery-injector.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  providers: [GalleryInjectorService]
})
export class DefaultComponent extends PageBaseTemplate implements AfterViewInit {
  public static readonly className = 'DefaultComponent';
  @ViewChild('wysiwyg') private postContent: ElementRef;

  constructor(private galleryInjectorService: GalleryInjectorService) {
    super();
  }

  ngAfterViewInit() {
    this.galleryInjectorService.initializeGalleries(this.postContent);
  }
}
