import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { DateformatComponent } from './dateformat/dateformat.component';
import { JsonformatComponent } from './jsonformat/jsonformat.component';
import { NumberformatComponent } from './numberformat/numberformat.component';
import { SliceComponent } from './slice/slice.component';
import { DemoPipe } from './demo.pipe';
import { CustomeComponent } from './custome/custome.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    DateformatComponent,
    JsonformatComponent,
    NumberformatComponent,
    SliceComponent,
    DemoPipe,
    CustomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
