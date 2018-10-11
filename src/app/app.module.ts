import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MzCollapsibleModule } from 'ngx-materialize';
import { MzMediaModule } from 'ngx-materialize';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccomplishmentsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MzCollapsibleModule,
    MzMediaModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
