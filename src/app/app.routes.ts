import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { SearchHeroesComponent } from "./components/search-heroes/search-heroes.component";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "search/:word", component: SearchHeroesComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: HomeComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
