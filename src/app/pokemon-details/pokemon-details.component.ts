import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  imports: [CommonModule],
  template: `
    <section class="pokemon_card">
      <div class="pokemon-main">
        <h2 class="pokemon-naam">{{ pokemon?.naam }} <span class="pokemon-nummer">#{{pokemon?.id}}</span></h2>
        <img class="default-image" [src]="hovered ? pokemon?.sprites?.front_shiny : pokemon?.sprites?.front_default"
             alt="Photo of {{pokemon?.naam}}"
             (mouseenter)="hovered = true"
             (mouseleave)="hovered = false"/>
      </div>
      <div class="pokemon-info">
        <h3>Height:</h3>
        <p class="pokemon-height">{{ (pokemon?.hoogte || 0) / 10 }} m</p>
        <h3>Weight:</h3>
        <p class="pokemon-weight">{{ (pokemon?.gewicht || 0) / 10 }} kg</p>
        <h3>Types:</h3>
        <p class="pokemon-types"><span *ngFor="let type of pokemon?.types" [class]="type.name">{{ type.name }}</span></p>
        <h3>Weaknesses:</h3>
        <p class="pokemon-weakness"><span *ngFor="let weakness of pokemon?.weaknesses" [class]="weakness.name">{{ weakness.name }}</span></p>
        <h3>Abilities:</h3>
        <p class="pokemon-abilities"><span *ngFor="let ability of pokemon?.abilities" [class]="ability.ability.name">{{ ability.ability.name }}</span></p>
        <h3>Stats:</h3>
        <table class="pokemon-stats">
          <tbody>
          <tr *ngFor="let stat of pokemon?.stats">
            <td class="{{ stat.stat.name }}">{{ stat.stat.name | titlecase }}</td>
            <td>{{ stat.base_stat }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  styleUrl: './pokemon-details.component.css'

})
export class PokemonDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  hovered: boolean = false
  pokemonService: PokemonService = inject(PokemonService);
  pokemon: Pokemon | undefined

  constructor() {
    const pokemonId = Number(this.route.snapshot.params["id"])
    this.pokemonService.getPokemonById(pokemonId).then(pokemon => {
      this.pokemon = pokemon;
    })
  }
}
