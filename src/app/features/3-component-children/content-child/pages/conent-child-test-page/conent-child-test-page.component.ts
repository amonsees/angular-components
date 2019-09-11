import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conent-child-test-page',
  templateUrl: './conent-child-test-page.component.html',
  styleUrls: ['./conent-child-test-page.component.scss']
})
export class ConentChildTestPageComponent implements OnInit {

  showChild = true;
  selectedItem = 'contentChild';

  constructor() { }

  ngOnInit() {
  }

}
