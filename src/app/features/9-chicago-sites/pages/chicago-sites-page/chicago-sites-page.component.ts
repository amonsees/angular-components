import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

import { Observable } from 'rxjs';

import { chicagoSiteList } from 'src/app/features/9-chicago-sites/models/chicago-site-list';
import { Site } from 'src/app/features/9-chicago-sites/models/site.model';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-chicago-sites-page',
  templateUrl: './chicago-sites-page.component.html',
  styleUrls: ['./chicago-sites-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChicagoSitesPageComponent implements OnInit {

  sites$: Observable<Site[]>;

  @ViewChild(RouterOutlet) routerOutlet: RouterOutlet;

  constructor(private siteService: SiteService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.sites$ = this.siteService.getSites();
  }

  selectSite(site: Site) {
    this.router.navigate(['edit', site.id], {relativeTo: this.route});
  }
}
