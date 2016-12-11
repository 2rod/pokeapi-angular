import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { TextChange} from '../text-change';

import { Pokemon } from '../pokemon';
import { PokeapiClientService } from '../pokeapi-client.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokeapiClientService]
})
export class PokemonListComponent implements OnInit {

  @Input()
  type: string;
  @Input()
  searchTerm: string;
  pokemon: Pokemon;
  pokemonList: Pokemon[];
  errMsg: string;

  constructor(private client: PokeapiClientService) {
  }

  searchAgain(): void {
    if (this.type === "search" && this.searchTerm) {
      this.client.getPokemonByName(this.searchTerm)
        .then(pokemon => this.pokemon = pokemon);
    }
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
     let changedProp = changes['searchTerm'];
     if (changedProp) {
       this.searchTerm = changedProp.currentValue;
      //  this.searchAgain();
     }
  }

  ngOnInit() {
    if (this.type === "search" && this.searchTerm) {
      this.client.getPokemonByName(this.searchTerm)
        .then(pokemon => this.pokemon = pokemon)
        .catch(err => {
          this.errMsg = err;
          console.log('errMsg', this.errMsg);
        })
    } else {
      this.client.getPokemons()
        .then(pokemons => this.pokemonList = pokemons)
        .catch(err => this.errMsg = err.message )
    }
  }

}
