import { Component, OnInit } from '@angular/core';
import { FeedService } from './services/feed/feed.service';
import { Feed, FeedPayload, FeedItems } from './model/feed';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private feedUrl: string = 'https://medium.com/feed/invironment/tagged/food';
  private feed: Feed;
  private feedItems: FeedItems[];

  constructor(
    private feedService: FeedService
  ) {}
  
  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedPayload(this.feedUrl)
      .subscribe(
        feedPayload => {
          this.feed = feedPayload.feed;
          this.feedItems = feedPayload.items;
        },
        error => console.log('>>>', error),
        () => {
          console.log('>>> Done', this.feedItems);
          console.log('>>> Done', this.feed);
        }
      );
      
  }

  private refreshFeedUrl() {
    return this.feedUrl;
  }
}
