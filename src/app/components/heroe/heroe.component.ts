import { Component } from "@angular/core";
import { HeroesService } from "../services/heroes.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"],
})
export class HeroeComponent {
  heroe: any = {};

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(param => {
      this.heroe = this.heroesService.getHeroe(param.id);
    });
  }

  volver() {
    this.router.navigate(["heroes"]);
  }
}
