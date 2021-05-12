import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessagesService } from '../messages/messages.service';

import { Hero } from '../../models/hero.model';
import { HEROES } from '../../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private messageService: MessagesService) { }

  public getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessage('HeroService: fetched heroes');

    return heroes;
  }

  public getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);

    return of(hero);
  }
}
