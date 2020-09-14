import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../services/heroes.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-search-heroes",
  templateUrl: "./search-heroes.component.html",
  styleUrls: ["./search-heroes.component.css"],
})
export class SearchHeroesComponent implements OnInit {
  heroe: any = {};
  word: string = "";

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(param => {
      this.word = param.word;
      this.heroe = this.heroesService.searchHeroes(param.word);
    });
  }

  volver() {
    this.router.navigate(["heroes"]);
  }

  ngOnInit(): void {}
}
