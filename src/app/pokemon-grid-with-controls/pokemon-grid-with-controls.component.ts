import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

import { Pokemon, SortByOption, SortByOptions } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-grid-with-controls',
  templateUrl: './pokemon-grid-with-controls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule, PokemonCardComponent, CommonModule],
})
export class PokemonGridWithControlsComponent implements OnChanges {
  @Input() pokemons: Pokemon[];

  pokemonsToDisplay: Pokemon[];
  searchQuery = '';
  sortBy: SortByOption = SortByOption.NumberAscending;
  sortByOptions = SortByOptions;

  ngOnChanges(): void {
    this.pokemonsToDisplay = this.pokemons.slice();
  }

  handleSearchQueryChange(): void {
    this.pokemonsToDisplay = this.pokemons.filter(
      ({ name, number }: Pokemon) =>
        name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        number.includes(this.searchQuery)
    );
    this.handleSortOptionChange();
  }

  handleSortOptionChange(): void {
    this.pokemonsToDisplay.sort(
      (
        { name: nameA, number: numberA }: Pokemon,
        { name: nameB, number: numberB }: Pokemon
      ) => {
        let valueToReturn;
        switch (this.sortBy) {
          case SortByOption.NameAscending:
            valueToReturn = +(nameA > nameB) * 2 - 1;
            break;
          case SortByOption.NameDescending:
            valueToReturn = +(nameB > nameA) * 2 - 1;
            break;
          case SortByOption.NumberDescending:
            valueToReturn = this.substractTwoValues(numberB, numberA);
            break;
          case SortByOption.NumberAscending:
          default:
            valueToReturn = this.substractTwoValues(numberA, numberB);
        }
        return valueToReturn;
      }
    );
  }

  private substractTwoValues(first, second): any {
    return first - second;
  }
}
