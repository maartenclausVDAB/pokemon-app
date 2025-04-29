import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
        <main>
            <header class="title">
              <a routerLink="/">
                <img class="pokedex-logo" src="https://fontmeme.com/permalink/250424/567eeac9f9d8af643cd05448c25e45cc.png"
                alt="PokeDex Logo">
              </a>
            </header>
            <section class="content">
              <router-outlet></router-outlet>
            </section>
        </main>
    `,
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]
})
export class AppComponent {
  title = 'pokemon-app';
}

