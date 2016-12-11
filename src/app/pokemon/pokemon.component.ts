import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokeapiClientService } from '../pokeapi-client.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [ PokeapiClientService ]
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();

  constructor(
    private route: ActivatedRoute,
    private client: PokeapiClientService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let pokemonId = +params['pokemonId'];
      this.client.getPokemonById(pokemonId)
        .then(pokemon => {
          console.log('pokemon', pokemon);
          this.pokemon = pokemon;
        });
    })
  }

}
