export interface Pokemon {
  id: number;
  naam: string;
  types: PokemonType[];
  weaknesses: PokemonType[];
  sprites: PokemonSprites;
  hoogte: number;
  gewicht: number;
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}

export interface PokemonStat{
  base_stat: number;
  stat: APIResource;
}

export interface PokemonAbility{
  is_hidden: boolean;
  ability: APIResource;
}

export interface PokemonType {
  id: number;
  name: string;
  self: string;
}

export interface PokemonSprites {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface APIResource{
  name: string;
  url: string;
}
