import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { chicagoSiteList } from 'src/app/shared/const/chicago-site-list';
import { SiteService } from '../../services/site.service';
import { Site } from 'src/app/shared/models/site.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chicago-sites-page',
  templateUrl: './chicago-sites-page.component.html',
  styleUrls: ['./chicago-sites-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChicagoSitesPageComponent implements OnInit {

  sites$ : Observable<Site[]>;

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
