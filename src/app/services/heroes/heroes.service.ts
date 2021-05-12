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
}
