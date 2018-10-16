import { Component, OnInit, NgModule } from '@angular/core';
import { MzButtonModule } from 'ngx-materialize';
import { MzInputModule } from 'ngx-materialize';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

@NgModule({
  imports: [
    MzButtonModule,
    MzInputModule
  ],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
