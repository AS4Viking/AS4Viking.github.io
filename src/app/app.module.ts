import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MzCollapsibleModule } from 'ngx-materialize';
import { MzMediaModule } from 'ngx-materialize';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccomplishmentsComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MzCollapsibleModule,
    MzMediaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
