import { Component, OnInit, Input } from '@angular/core';
import { Site } from 'src/app/features/9-chicago-sites/models/site.model';

@Component({
  selector: 'app-chicago-site',
  templateUrl: './chicago-site.component.html',
  styleUrls: ['./chicago-site.component.scss']
})
export class ChicagoSiteComponent {
  @Input() site: Site;
}
