import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  selected: boolean = false;
  title!: String; 
  onClick() {
    this.selected = !this.selected;
  }

}
