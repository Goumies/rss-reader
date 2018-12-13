import { Injectable } from '@angular/core';
import { Feed, FeedPayload } from '../../model/feed';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private rssToJsonServiceBaseUrl: string = 'https://api.rss2json.com/v1/api.json?rss_url=';

  constructor(private http: HttpClient) { }

  getFeedPayload(url: string): Observable<FeedPayload> {
    return this.http.get<FeedPayload>(this.rssToJsonServiceBaseUrl + url);
  }

  private handleError(error: any) {
    let errorMessage = (error.message) ? error.message : 
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errorMessage);
      return Observable.throw(errorMessage);
  }
}
