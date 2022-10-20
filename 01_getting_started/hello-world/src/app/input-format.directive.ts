import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: any;
  @HostListener('focus') onFocus(){
    console.log("onFocus");
  }
  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value

    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase()
    else if(this.format == 'uppercase')
      this.el.nativeElement.value = value.toUpperCase()
    else if(this.format == 'capitalize')
      this.el.nativeElement.value = value[0].toUpperCase() + value.substring(1).toLowerCase()

  }
  constructor(private el: ElementRef) {

  }

}
