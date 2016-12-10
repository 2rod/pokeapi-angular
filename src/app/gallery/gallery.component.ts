import { Component, OnInit } from '@angular/core';
import { TextChange} from '../text-change';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  text: string;

  constructor(private _textChange: TextChange) {
      _textChange.subscribe({
        next: text => {
          this.text = text;
        }
      })
    }

  ngOnInit() {
  }

}
