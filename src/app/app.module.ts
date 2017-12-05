import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RemoveHtmlTagsPipe } from './remove-html-tags.pipe';
import { QuoteService } from './quote.service';


@NgModule({
  declarations: [
    AppComponent,
    RemoveHtmlTagsPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
