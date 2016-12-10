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
  pokemons: Pokemon;

  constructor(private client: PokeapiClientService) {
  }

  // searchAgain(): void {
  //   if (this.type === "search" && this.searchTerm) {
  //     this.client.getPokemonsFromSearch(this.searchTerm)
  //       .then(pokemons => this.pokemons = pokemons);
  //   }
  // }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
     let changedProp = changes['searchTerm'];
     if (changedProp) {
       this.searchTerm = changedProp.currentValue;
      //  this.searchAgain();
     }
  }

  ngOnInit() {
    if (this.type === "search" && this.searchTerm) {
      // this.client.getPokemonsFromSearch(this.searchTerm)
        // .then(pokemons => this.pokemons = pokemons);
    } else {
      this.client.getPokemons()
        .then(pokemons => this.pokemons = pokemons);
    }
  }

}
