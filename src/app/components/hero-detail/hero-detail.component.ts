import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() public hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.getHero();
  }

  private getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroesService.getHero(id)
      .subscribe((hero) => {
        this.hero = hero;
      });
  }
}
