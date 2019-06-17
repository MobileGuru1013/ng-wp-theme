import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {
  public isLoading: Boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkEvent(routerEvent);
    });
  }

  checkEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.isLoading = true;
    } else if (routerEvent instanceof NavigationEnd ||
               routerEvent instanceof NavigationCancel ||
               routerEvent instanceof NavigationError) {
      this.isLoading = false;
    }
  }
}
