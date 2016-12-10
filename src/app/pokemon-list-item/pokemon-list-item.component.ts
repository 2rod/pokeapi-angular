import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {
  @Input()
  pokemon: Pokemon;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToPokemon(){
    this.router.navigate(['/pokemon', this.pokemon.id])
  }

}
