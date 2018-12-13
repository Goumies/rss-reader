import { Injectable } from '@angular/core';
import { Feed, FeedPayload } from '../../model/feed';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private rssToJsonServiceBaseUrl: string = 'https://api.rss2json.com/v1/api.json?rss_url=';

  constructor(private http: HttpClient) { }

  getFeedPayload(url: string): Observable<FeedPayload> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url)
      .pipe(map(this.extractFeed));
  }
  extractFeed(response: Response):  {
    let feed = response.json();
    return feed;
  }

  private handleError(error: any) {
    let errorMessage = (error.message) ? error.message : 
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errorMessage);
      return Observable.throw(errorMessage);
  }
}
