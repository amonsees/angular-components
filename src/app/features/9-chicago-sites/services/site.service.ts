import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Site } from 'src/app/features/9-chicago-sites/models/site.model';
import { chicagoSiteList } from 'src/app/features/9-chicago-sites/models/chicago-site-list';
import { ChicagoSitesFeatureModule } from '../chicago-sites-feature.module';
import { intConverter } from '../../2-input-outputs/functions/input-converters.function';

@Injectable(
  {
    providedIn: 'root'
  }
)
/**
 * Service to manage a list of in-memory sites
 */
export class SiteService {
  private sites: BehaviorSubject<Site[]> = new BehaviorSubject<Site[]>([]);

  constructor() {
    // Initialize the chicago sites
    this.sites.next(chicagoSiteList);
  }

  /**
   * Get a list of sites
   */
  getSites(): Observable<Site[]> {
    return this.sites.asObservable();
  }

  /**
   * Get a single site
   * @param id site id
   */
  getSite(id: number): Observable<Site> {
    const siteList = this.sites.value;

    // ensure that id is a integer
    id = intConverter(id);

    const existingSite = siteList.find(s => s.id === id);

    return of(existingSite);
  }

  /**
   * Adds or updates a site in the site list
   * @param site site
   */
  addOrUpdateSite(site: Site) {
    const siteList = this.sites.value;

    if (!site.id) {
      // Add a new Site
      site.id = siteList.length + 1;

      siteList.push(site);
    } else {
      // Update an existing site
      const existingSite = siteList.find(s => s.id === site.id);

      existingSite.name = site.name;
      existingSite.siteType = site.siteType;
      existingSite.height = site.height;
      existingSite.description = site.description;
    }

    this.sites.next(siteList);
  }
}
