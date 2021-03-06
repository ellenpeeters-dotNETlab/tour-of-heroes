import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe((heroes) => {
        this.heroes = heroes.slice(1, 5);
      });
  }
}
