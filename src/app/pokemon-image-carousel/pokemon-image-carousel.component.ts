import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PokemonImage } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-image-carousel',
  templateUrl: './pokemon-image-carousel.component.html',
  styleUrls: ['./pokemon-image-carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonImageCarouselComponent {
  @Input() images: Array<PokemonImage> = [];
}
