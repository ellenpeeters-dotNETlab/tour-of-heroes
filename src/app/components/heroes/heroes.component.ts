import { Component, OnInit } from '@angular/core';

import { HEROES } from '../..//mock-heroes';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = HEROES;
  public selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
