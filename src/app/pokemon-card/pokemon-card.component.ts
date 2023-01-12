import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BadgeBgPipe } from '../badge-bg.pipe';

import { Pokemon } from '../pokemon.model';
import { fadeAnimation } from './pokemon-card.animation';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [BadgeBgPipe]
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon;
}
