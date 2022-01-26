import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtitlepipe',
  pure: false
})
export class SearchtitlepipePipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    
    if (!items || !filter){return items}
    return items.filter(item => item.title.indexOf(filter) !==-1);
  }

}