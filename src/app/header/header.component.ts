import { Component, OnInit } from '@angular/core';
import { TextChange} from '../text-change';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  text: string = '';

  constructor(private _textChange: TextChange) { }

  clearText() {
    this.text = '';
  }

  textChanged(event) {
    console.log(event.target.value)
    this._textChange.next(event.target.value);
  }

  ngOnInit() {
  }

}
