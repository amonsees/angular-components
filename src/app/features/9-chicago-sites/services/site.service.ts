import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Site } from 'src/app/shared/models/site.model';
import { chicagoSiteList } from 'src/app/shared/const/chicago-site-list';
import { ChicagoSitesFeatureModule } from '../chicago-sites-feature.module';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class SiteService {
  private sites: BehaviorSubject<Site[]> = new BehaviorSubject<Site[]>([]);

  constructor() {
    // Initialize the chicago sites
    this.sites.next(chicagoSiteList);
  }

  getSites() {
    return this.sites.asObservable();
  }

  getSite(id: number): Observable<Site> {
    const siteList = this.sites.value;

    const existingSite = siteList.find(s => s.id == id);

    return of(existingSite);
  }

  addEditSite(site: Site) {
    const siteList = this.sites.value;

    if (!site.id) {
      // Add a new Site
      site.id = siteList.length + 1;

      siteList.push(site);
    } else {
      // Update an existing site
      const existingSite = siteList.find(s => s.id == site.id);

      existingSite.name = site.name;
      existingSite.siteType = site.siteType;
      existingSite.height = site.height;
      existingSite.description = site.description;
    }

    this.sites.next(siteList);
  }
  
}
