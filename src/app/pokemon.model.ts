export interface PokemonStripes {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Pokemon {
  name: string;
  number: string;
  description: string;
  image: string;
  types: string[];
  sprites: PokemonStripes;
}

export interface PokemonImage {
  src: string;
  alt: string;
}

export interface APIResponse {
  pokemon: Pokemon[];
}

export enum SortByOption {
  NameAscending = 'Name - Ascending',
  NameDescending = 'Name - Descending',
  NumberAscending = 'Number - Ascending',
  NumberDescending = 'Number - Descending',
}

export const SortByOptions = [
  { value: SortByOption.NameAscending, label: SortByOption.NameAscending },
  { value: SortByOption.NameDescending, label: SortByOption.NameDescending },
  {
    value: SortByOption.NumberAscending,
    label: SortByOption.NumberAscending,
  },
  {
    value: SortByOption.NumberDescending,
    label: SortByOption.NumberDescending,
  },
];
