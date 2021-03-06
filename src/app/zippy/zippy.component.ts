import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  selected: boolean = false;
  @Input() title!: string; 

  onClick() {
    this.selected = !this.selected;
  }

}
