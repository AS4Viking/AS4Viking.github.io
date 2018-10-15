import { Component, OnInit, NgModule } from '@angular/core';
import { MzCollapsibleModule } from 'ngx-materialize';

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
  constructor() {}

  ngOnInit() {
  }
  // function expandAll(){
  //   $(".collapsible-header").addClass("active");
  //   $(".collapsible").collapsible({accordion: false});
  // }
  
  // function collapseAll(){
  //   $(".collapsible-header").removeClass(function(){
  //     return "active";
  //   });
  //   $(".collapsible").collapsible({accordion: true});
  //   $(".collapsible").collapsible({accordion: false});
  // }
}


