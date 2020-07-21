import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor( private router: Router) {   }

  seeArtist ( item: any ) {

    let id: string; 
    if (item.type === 'artist') {
      id = item.id;
    } else {
      id = item.artists[0].id;
    }

    this.router.navigate([ '/artist', id]);

  }


}
