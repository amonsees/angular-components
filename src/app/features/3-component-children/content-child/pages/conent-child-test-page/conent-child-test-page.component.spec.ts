import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConentChildTestPageComponent } from './conent-child-test-page.component';

describe('ConentChildTestPageComponent', () => {
  let component: ConentChildTestPageComponent;
  let fixture: ComponentFixture<ConentChildTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConentChildTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConentChildTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
