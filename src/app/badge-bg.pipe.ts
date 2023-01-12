import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badgeBg',
  standalone: true,
})
export class BadgeBgPipe implements PipeTransform {
  colorsMap = {
    Grass: '#07c160',
    Fire: '#ed6a0c',
    Water: '#1989fa',
  };

  transform(pokemonType: string): string {
    return this.colorsMap[pokemonType] || '#c8c9cc';
  }
}
