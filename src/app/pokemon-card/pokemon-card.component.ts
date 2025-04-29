import {Component, Input} from '@angular/core';
import {Pokemon} from '../pokemon';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="pokemon_card">
      <img class="default-image" [src]="hovered ? pokemon.sprites.front_shiny : pokemon.sprites.front_default"
           alt="Photo of {{pokemon.naam}}"
           (mouseenter)="hovered = true"
           (mouseleave)="hovered = false"/>
      <p class="pokemon-nummer">#{{pokemon.id}}</p>
      <h2 class="pokemon-naam">{{ pokemon.naam }}</h2>
      <p class="pokemon-types"><span *ngFor="let type of pokemon.types" [class]="type.name">{{ type.name }}</span>
      </p>
      <a [routerLink]="['/details', pokemon.id]" class="pokemon-link">View Pokemon</a>
    </section>
  `,
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemon!:Pokemon;
  hovered: boolean = false;
}
