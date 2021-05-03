import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: any[];

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.followers = response as any;
      });
  }

  constructor(private service: FollowerService ){

  }
}
