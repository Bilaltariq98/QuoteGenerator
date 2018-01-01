import { Component } from '@angular/core';
import { QuoteService } from './quote.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IQuote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quote: IQuote = { ID: null, title: null, content: '<p>Loading...<\/p>', link: null }
  constructor(private _quoteService: QuoteService) { 
  }

  newQuote(): void {
    this._quoteService.getRandomQuote().subscribe(response => this.quote = response[0])
  }

  ngOnInit() {
    this._quoteService.getRandomQuote().subscribe(response => this.quote = response[0])
  }

}
