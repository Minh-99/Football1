import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../Services/addtocart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  public notification ;
  public like ;
  constructor(private add:AddtocartService) {
    this.notification=add.notification;
    this.like=add.like;
  }

  ngOnInit(): void {}
  public addlike() {
    this.add.like++;
    this.like= this.add.like;
  }
  public addtocart() {
    this.add.notification++;
    this.notification= this.add.notification;
  }
}
