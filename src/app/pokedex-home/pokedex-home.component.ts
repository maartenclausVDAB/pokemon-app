import {Component, inject} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {PokemonCardComponent} from '../pokemon-card/pokemon-card.component';
import {CommonModule} from '@angular/common';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-pokedex-home',
  imports: [CommonModule, PokemonCardComponent],
  template: `
    <section class="main-content">
      <div *ngIf="loading" class="loading">
        <div class="spinner"></div>
      </div>
      <div *ngIf="!loading" class="pagination">
        <button (click)="prevPage()" [disabled]="currentPage === 0">Vorige</button>
        <span>Pagina {{ currentPage + 1 }}</span>
        <button (click)="nextPage()">Volgende</button>
      </div>
      <section *ngIf="!loading" class="pokemon">
        <app-pokemon-card *ngFor="let pokemon of pokemonList"
                          [pokemon]="pokemon"></app-pokemon-card>
      </section>

      <div *ngIf="!loading"  class="pagination">
        <button (click)="prevPage()" [disabled]="currentPage === 0">Vorige</button>
        <span>Pagina {{ currentPage + 1 }}</span>
        <button (click)="nextPage()">Volgende</button>
      </div>
    </section>
  `,
  styleUrl: './pokedex-home.component.css'
})
export class PokedexHOmeComponent {
  pokemonList: Pokemon[] = []
  loading: boolean = true;
  currentPage: number = 0
  offset: number = this.currentPage * 30
  pokemonService: PokemonService = inject(PokemonService);

  nextPage() {
    console.log("clicked")
    this.currentPage++;
    this.offset = this.currentPage * 30
    console.log(this.currentPage)
    this.loadPage();
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.offset = this.currentPage * 30
      this.loadPage();
    }
  }

  loadPage() {
    this.loading = true
    console.log("load")
    console.log(this.offset)
    this.pokemonService.getPokemonPer30(this.offset).then((pokemonList: Pokemon[]) => {
      this.pokemonList = pokemonList;
      this.loading = false;
    }).catch(error => {
      console.error('Fout bij laden:', error);
      this.loading = false;
    });
  }

  constructor() {
    this.loadPage();
  }
}
