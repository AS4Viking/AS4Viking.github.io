import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MzCollapsibleModule } from 'ngx-materialize';
import { MzMediaModule } from 'ngx-materialize';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MzCollapsibleModule,
    MzMediaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
