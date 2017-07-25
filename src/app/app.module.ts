import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EnlightenedService } from './enlightened.service';

import { AppComponent } from './app.component';
import { BillsComponent } from './bills/bills.component';
import { CommitteesComponent } from './committees/committees.component';
import { routing } from './app.routing';
import { LegislatorDetailComponent } from './legislator-detail/legislator-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    CommitteesComponent,
    LegislatorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers:[EnlightenedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
