import { OnInit }    from '@angular/core';
import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html' ,
  styleUrls: [ 'heroes.component.css' ],
  providers: [ HeroService ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  goToDetail(): void {
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }
}