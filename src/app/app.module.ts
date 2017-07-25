import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BillsComponent } from './bills/bills.component';
import { CommitteesComponent } from './committees/committees.component';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    CommitteesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
