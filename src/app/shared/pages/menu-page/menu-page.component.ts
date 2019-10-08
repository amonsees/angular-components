import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Route, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
})
export class MenuPageComponent implements OnInit {
  routes: Route[];
  display: string;
  description: string;
  routeConfig: Route;

  currentUrl: string;

  @ViewChild(RouterOutlet) routerOutlet: RouterOutlet;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeConfig = this.route.routeConfig;

    let data: any = null;
    if (this.routeConfig) {
      data = this.routeConfig.data;
      this.routes = this.route.routeConfig.children;
    } else {
      this.routes = this.router.config;
    }

    if (data) {
      this.display = this.route.routeConfig.data.display;
      this.description = this.route.routeConfig.data.description;
    }

    this.currentUrl = this.buildCurrentUrl();
  }

  /**
   * Builds a URL, but ignores route parameters
   */
  private buildCurrentUrl() {
    const urlParts: string[] = [];

    let currentRoute = this.route.snapshot;

    while (currentRoute != null) {
      for (const urlPart of currentRoute.url) {
        urlParts.push(urlPart.toString());
      }

      currentRoute = currentRoute.parent;
    }

    return '/' + urlParts.join('/');
  }
}
