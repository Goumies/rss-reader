import { Component, OnInit, Input } from '@angular/core';
import { Feed, FeedItems } from 'src/app/model/feed';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feedUrl: string;
  @Input() feed: Feed;
  @Input() feedItems: FeedItems[];

  constructor() { }

  ngOnInit() {
  }

}
