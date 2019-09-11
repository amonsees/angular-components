import {
  Component, OnInit, ViewChild, AfterViewInit,
  AfterContentInit, Input, Type, Output, EventEmitter, ComponentFactoryResolver, OnDestroy, OnChanges, SimpleChanges
} from '@angular/core';
import { DynamicHostDirective } from '../../directives/dynamic-host.directive';


@Component({
  selector: 'app-dynamic-loader',
  template: `<ng-template appDynamicHost></ng-template>`
})
export class DynamicLoaderComponent implements AfterContentInit, OnDestroy, OnChanges {
  @Input() component: Type<any>;
  @Output() configure: EventEmitter<any> = new EventEmitter();
  @ViewChild(DynamicHostDirective) dynamicHost: DynamicHostDirective;

  componentInstance: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    this.loadComponent(this.component);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.component && !changes.component.isFirstChange()) {
      this.loadComponent(this.component);
    }
  }

  loadComponent(component: Type<any>) {
    // Ensure everything is setup before loading component
    if (!this.dynamicHost || !this.dynamicHost.viewContainerRef) {
      return;
    }

    // Get a reference to the directives view Container ref (See DynamicHost directive for more info)
    const viewContainerRef = this.dynamicHost.viewContainerRef;

    // If we already have a component instance, let clean this up here
    if (this.componentInstance && this.componentInstance.ngOnDestroy) {
      (this.componentInstance as OnDestroy).ngOnDestroy();
    }

    // Clear any existing components
    viewContainerRef.clear();

    if (!component) {
      return;
    }

    // Create the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    // Create the component itself
    const componentRef = viewContainerRef.createComponent(componentFactory);


    // set the component instance (so we can reference it later for clean up)
    this.componentInstance = componentRef.instance;

    // Emit event so the host can configure the dynamic component
    this.configure.emit(this.componentInstance);
  }

  ngOnDestroy(): void {
    if (this.componentInstance && this.componentInstance.ngOnDestroy) {
      (<OnDestroy>this.componentInstance).ngOnDestroy();
    }
  }

}
