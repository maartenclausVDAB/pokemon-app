import {Routes} from "@angular/router";
import {PokedexHOmeComponent} from './pokedex-home/pokedex-home.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';

const routeConfig: Routes = [
  {
    path: "",
    component: PokedexHOmeComponent,
    title: "Home Page"
  },
  {
    path:"details/:id",
    component: PokemonDetailsComponent,
    title: "Details Page"
  }
]

export default routeConfig;
