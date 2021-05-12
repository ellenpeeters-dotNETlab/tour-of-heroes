import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes/heroes.service';
import { MessagesService } from '../../services/messages/messages.service';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];
  public selectedHero: Hero;

  constructor(
    private heroesService: HeroesService,
    private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messagesService.addMessage(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  private getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe((heroes) => {
        this.heroes = heroes;
      });
  }
}
