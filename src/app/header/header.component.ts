import { Component, OnInit, NgModule } from '@angular/core';
import { MzCollapsibleModule } from 'ngx-materialize'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@NgModule({
  imports: [
    MzCollapsibleModule,
  ],
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  constructor() {
  }
  ngOnInit() {
  }

}

