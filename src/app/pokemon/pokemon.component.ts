import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonGridWithControlsComponent } from '../pokemon-grid-with-controls/pokemon-grid-with-controls.component';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PokemonGridWithControlsComponent, HttpClientModule, CommonModule],
  providers: [PokemonService],
})
export class PokemonComponent {
  pokemons$: Observable<Pokemon[]> = this.pokemonService.getPokemons();
  constructor(private readonly pokemonService: PokemonService) {
    console.log('Pokemon Component');
  }
}
