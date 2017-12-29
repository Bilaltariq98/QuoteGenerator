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
  quote: string = '<p>Some random quote.<\/p>';
  quotearr: IQuote;

  constructor(private _quoteService: QuoteService) {

  }

  newQuote(): void {
    console.log("works");
  }

  ngOnInit() {
    this._quoteService.getRandomQuote().subscribe(response => {
      // console.log(response);
      this.quote = response[0].content;
    });
    // console.log(this.quotearr);
  }

  getNewQuote(): void { 
    this._quoteService.getRandomQuote().subscribe(response => {
      // console.log(response);
      this.quote = response[0].content;
    });
  }
}
