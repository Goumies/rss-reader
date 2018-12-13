import { Component, OnInit } from '@angular/core';
import { FeedService } from './services/feed/feed.service';
import { Feed, FeedPayload } from './model/feed';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private feedUrl: string = 'https://medium.com/feed/invironment/tagged/food';
  private feed: any;

  constructor(
    private feedService: FeedService
  ) {}
  
  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedPayload(this.feedUrl)
      .subscribe(
        feedPayload => this.feed = feedPayload
      );
      console.log(this.feed);
  }
}
