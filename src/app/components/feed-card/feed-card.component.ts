import { Component, OnInit, Input } from '@angular/core';
import { Feed } from 'src/app/model/feed';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: Feed;

  constructor() { }

  ngOnInit() {
  }

}
