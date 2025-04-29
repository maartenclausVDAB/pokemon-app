import { Injectable } from '@angular/core';
import {Pokemon} from './pokemon';
import {PokemonList} from './pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = "http://192.168.129.78:8080/pokemon"

  constructor() { }

  async getPokemonById(id: Number): Promise<Pokemon | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async getPokemonPer30(offset: number): Promise<Pokemon[]> {
    try {
      const result = await fetch(`${this.url}/list/${offset}`);
      const data = await result.json();
      return data.pokemon ?? []; // of data.results
    } catch (error) {
      return [];
    }
  }
}
