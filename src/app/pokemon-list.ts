import {Pokemon} from './pokemon';

export interface PokemonList {
  volgende30: string;
  vorige30: string
  pokemon: Pokemon[]
}
