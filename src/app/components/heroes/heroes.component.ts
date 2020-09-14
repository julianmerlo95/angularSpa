import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  constructor(private _heroesService: HeroesService, private route: Router) {}

  heroes: any[] = [];

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  getHeroe(id) {
    this.route.navigate(["/heroe", id]);
  }
}
