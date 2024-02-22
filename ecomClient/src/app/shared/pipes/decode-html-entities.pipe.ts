import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'decodeHtmlEntities',
  standalone: true
})
export class DecodeHtmlEntitiesPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  //Chuyển html encode thành decode
  //<p [innerHTML]="text | decodeHtmlEntities></p>"
  transform(str : string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(str);
  }

}
