import { Component } from '@angular/core';
import { QuoteService } from './quote.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IQuote } from './quote';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _quoteUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
  quote: string = '<p>Some random quote.<\/p>';
  quotearr: IQuote;
  constructor(private _quoteService: QuoteService, private _http: HttpClient) {

  }

  newQuote(): void {
    this._http.get(this.makeid()).subscribe(response => {
      this.quotearr = response[0];
      console.log(this.quotearr);
      this.quote = this.quotearr.content;
    })
  }

  ngOnInit() {
    this._http.get(this.makeid()).subscribe(response => {
      this.quotearr = response[0];
      console.log(this.quotearr);
      this.quote = this.quotearr.content;
    })
  }

  makeid(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log(text);
    return this._quoteUrl + text;
  }
}
