import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
 public notification=0;
 public like=0;

  constructor() { }
  public addlike() {
    this.like++;
  }
  public addtocart() {
    this.notification++;
  }
}
