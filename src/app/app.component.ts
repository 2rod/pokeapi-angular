import { Component } from '@angular/core';


import { PokeapiClientService } from './pokeapi-client.service';
import { TextChange} from './text-change';

import { Pokemon } from './pokemon';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TextChange ]
})
export class AppComponent {
}
