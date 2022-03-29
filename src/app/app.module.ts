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
import { MzButtonModule } from 'ngx-materialize';
import { MzInputModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';
import { VolunteerExperienceComponent } from './volunteer-experience/volunteer-experience.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccomplishmentsComponent,
    FooterComponent,
    BodyComponent,
    VolunteerExperienceComponent,
    WorkExperienceComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MzCollapsibleModule,
    MzMediaModule,
    MzButtonModule,
    MzInputModule,
    MzModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
