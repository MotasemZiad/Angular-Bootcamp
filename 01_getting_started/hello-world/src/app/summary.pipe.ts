import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(!value)
      return null;

      let limit = (args[0]) ? args[0] : 50;
      return value.substring(0, limit as number) + '...';
  }

}
