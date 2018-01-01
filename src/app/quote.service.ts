import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { IQuote } from './quote';
@Injectable()
export class QuoteService {
  private _quoteUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
  constructor(private _http: Http) { }

  getRandomQuote(): Observable<IQuote> {
    return this._http.get(this._quoteUrl + this.makeid()).map(response => <IQuote>response.json())
  }

  makeid(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    // console.log(text);
    return this._quoteUrl + text;
  }

}
