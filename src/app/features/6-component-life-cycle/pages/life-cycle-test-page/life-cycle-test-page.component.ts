import {
  Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-test-page',
  templateUrl: './life-cycle-test-page.component.html',
  styleUrls: ['./life-cycle-test-page.component.scss']
})
export class LifeCycleTestPageComponent  {
  message = 'Message';

}
