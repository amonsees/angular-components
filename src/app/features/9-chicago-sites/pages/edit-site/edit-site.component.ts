import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../../services/site.service';
import { Site } from 'src/app/features/9-chicago-sites/models/site.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SiteType } from '../../models/site-type.enum';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.scss']
})
export class EditSiteComponent implements OnInit {
  siteFormGroup: FormGroup;
  siteId: number;

  headerText: string;
  submitted = false;

  site: Site;

  siteTypes = [
    SiteType.building,
    SiteType.museum,
    SiteType.park,
    SiteType.stadium,
    SiteType.other
  ];

  get name() {
    return this.siteFormGroup.get('name');
  }

  get siteType() {
    return this.siteFormGroup.get('siteType');
  }

  constructor(
    private siteService: SiteService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.siteFormGroup = this.fb.group({
      name: [null, Validators.required],
      description: [null],
      height: [null],
      siteType: [null, Validators.required]
    });

    this.setupSite();
  }

  setupSite() {
    this.route.paramMap
      .subscribe(params => {
        // Get the Site Id from the route parameters
        this.siteId = parseInt(params.get('id'), 10);

        if (!this.siteId) {
          this.headerText = 'Add Site';
        } else {
          this.headerText = 'Edit Site';

          // Retrieve the site from the site service
          this.siteService.getSite(this.siteId)
            .subscribe(site => {
              this.site = site;

              // Patch the value to the form
              this.siteFormGroup.patchValue(site);
            });
        }
      });
  }

  onSubmit() {
    this.submitted = true;

    // Ensure the form is valid before continuing
    if (!this.siteFormGroup.valid) {
      return;
    }

    // Merge initial site with the form version - this keeps the id which wan't on the form
    const finalSite = { ...this.site, ...this.siteFormGroup.value };

    // Save site
    this.siteService.addOrUpdateSite(finalSite);

    this.closeAddEdit();
  }

  closeAddEdit() {
    this.router.navigateByUrl('/chicago-sites');
  }

}
