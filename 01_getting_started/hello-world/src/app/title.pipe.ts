import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(!value) return null

    let words = value.split(' ')

    for(let i = 0; i < words.length; i++){
      let word = words[i]
      if(i > 0 && this.isPreposition(word))
        word = word.toLowerCase()
      else
        word = this.capitalize(word)
    }

    return words.join(' ')
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      "of",
      "the"
     ]
     return prepositions.includes(word.toLowerCase());
  }

  private capitalize(word: string): string {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }

}
