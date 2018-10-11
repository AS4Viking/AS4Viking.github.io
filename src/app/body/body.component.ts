import { Component, OnInit, NgModule } from '@angular/core';
import { MzCollapsibleModule } from 'ngx-materialize';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

@NgModule({
  imports: [
    MzCollapsibleModule,
  ],
})

export class BodyComponent implements OnInit {
  faCoffee = faCoffee;
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
