import{Component, OnInit}from '@angular/core';

declare var particlesJS: any;

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor() { }

  ngOnInit() {
  // https://vincentgarreau.com/particles.js/
  particlesJS.load('particles-js', 'src/assets/data/particles/particles.json', function() {
  console.log('callback - particles.js config loaded');
  });
  }
}

