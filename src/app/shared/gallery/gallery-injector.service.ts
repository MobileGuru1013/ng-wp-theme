import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef, ElementRef } from '@angular/core';

import {
  Image,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  DescriptionStrategy,
  Description,
  GridLayout,
  ɵd as ModalGalleryComponent
} from 'angular-modal-gallery';

@Injectable()
export class GalleryInjectorService {
  private galleryFactory;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef
  ) {
    this.galleryFactory = this.componentFactoryResolver.resolveComponentFactory(ModalGalleryComponent);
  }

  public initializeGalleries(container: ElementRef) {
    const containerChildren = container.nativeElement.children;

    Array
      .from(containerChildren)
      .filter((el: HTMLElement) => el.className.includes('gallery') && el.hasAttribute('data-gallery-json'))
      .forEach((el: HTMLElement) => {
        this.createDynamicGalleryComponent(el);
      });
  }

  private createDynamicGalleryComponent(element: HTMLElement) {
    setTimeout(() => {
      const galleryData = JSON.parse(element.getAttribute('data-gallery-json'));
      const ref = this.galleryFactory.create(this.injector, [], element);
      ref.instance.modalImages = this.getImagesGalleryInput(galleryData);
      ref.instance.plainGalleryConfig = this.getGalleryConfig();
      ref.instance.description = this.getDescriptionConfig();
      ref.instance.previewConfig = { visible: true };
      ref.instance.dotsConfig = { visible: false };
      ref.instance.slideConfig = { infinite: false, sidePreviews: { show: false } };
      this.app.attachView(ref.hostView);
    }, 1);
  }

  private getImagesGalleryInput(galleryData): Image[] {
    const galleryImages = [];

    galleryData.forEach((image, index) => {
      galleryImages.push(new Image(
        index,
        {
          img: image.large,
          description: image.caption
        },
        {
          img: image.thumbnail
        }
      ));
    });

    return galleryImages;
  }

  private getDescriptionConfig(): Description {
    return {
      strategy: DescriptionStrategy.HIDE_IF_EMPTY
    };
  }

  private getGalleryConfig(): PlainGalleryConfig {
    return {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout(
        {
          width: '150px',
          height: '150px'
        },
        {
          length: 3,
          wrap: true
        }
      )
    };
  }

}
