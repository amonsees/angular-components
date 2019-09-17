import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleTestPageComponent } from './life-cycle-test-page.component';

describe('LifeCycleTestPageComponent', () => {
  let component: LifeCycleTestPageComponent;
  let fixture: ComponentFixture<LifeCycleTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
