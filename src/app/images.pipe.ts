import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon, PokemonImage } from './pokemon.model';

@Pipe({
  name: 'images',
})
export class ImagesPipe implements PipeTransform {
  transform(pokemon: Pokemon): Array<PokemonImage> {
    return [
      {
        src: pokemon.image,
        alt: pokemon.name,
      },
      {
        src: pokemon.sprites.back_default,
        alt: `${pokemon.name} Back - Default`,
      },
      {
        src: pokemon.sprites.back_shiny,
        alt: `${pokemon.name} Back - Shiny`,
      },
      {
        src: pokemon.sprites.front_default,
        alt: `${pokemon.name} Front - Default`,
      },
      {
        src: pokemon.sprites.front_shiny,
        alt: `${pokemon.name} Front - Shiny`,
      },
    ];
  }
}
