import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();
    for (let x = 0; x < times; x++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: x,
      });
    }
  }
}
