import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceWords',
  standalone:true
})
export class SliceWordsPipe implements PipeTransform {

  transform(value: string,num:number): string {
    let words=value.split(" ");
    let choiceword=words.slice(0,num);
    let joinedwords=choiceword.join(" ")
    return joinedwords;
  }

}
