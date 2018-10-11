import { Component, OnInit, NgModule } from '@angular/core';
import { MzCollapsibleModule } from 'ngx-materialize';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
  faCoffee = faCoffee;
  public isCollapsed = true;
  constructor() {}

  ngOnInit() {
  }

}

