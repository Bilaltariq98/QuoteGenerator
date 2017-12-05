import { Pipe, PipeTransform } from '@angular/core';
declare var jquery:any;
declare var $:any;
@Pipe({
  name: 'removeHtmlTags'
})
export class RemoveHtmlTagsPipe implements PipeTransform {

  transform(value: string): any {
    return $(value).text();
  }

}
