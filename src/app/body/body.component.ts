import { Component, OnInit, NgModule } from '@angular/core';
import { MzCollapsibleModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

@NgModule({
  imports: [
    MzCollapsibleModule,
    MzModalModule,
  ],
})

export class BodyComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
