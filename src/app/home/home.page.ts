import { Component } from '@angular/core';
import { BSON } from "bson";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    BSON.serialize({"as":1});
  }

}
