import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'jsh-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
selectedUniverse: string;
  //constructor() { }
editHandler(id) {
 this.heroSelected.emit(id);
}

  ngOnInit() {
this.selectedUniverse = 'all';
this.heros = this.heroService.heros;
  }

changeUniverse(newUniverse) {
  this.selectedUniverse = newUniverse;
}
heros: Hero[];

@Output() heroSelected = new EventEmitter();
constructor(private heroService: HeroService) { }
}
