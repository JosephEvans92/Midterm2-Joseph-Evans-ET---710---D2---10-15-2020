import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-beautiful-earth',
  templateUrl: './beautiful-earth.component.html',
  styleUrls: ['./beautiful-earth.component.css']
})
export class BeautifulEarthComponent implements OnInit {
 
 beautifulItems;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.beautifulItems = this.cartService.getBeautifulEarth();
  }

}