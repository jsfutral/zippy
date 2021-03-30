import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount: number = 0;
  @Input('isLiked') isLiked: boolean = false;
  

  onClick() {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1 : -1;
  }
}
