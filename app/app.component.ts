//import Component from angular core
import {Component} from 'angular2/core';

//import our Carousel Component
import {CSSCarouselComponent} from './carousel.component';

//@Component decorator
@Component({
  //tag
  selector: 'app',
  //template
  template: `
  <div class="wrapper">
    <css-carousel></css-carousel>
    </div>
  `,  
   //css
  styles: [`
   .wrapper{
      width: 60%;
      margin: 60px auto;
    }
  `],
  //tell angular we are using the css-carousel tag in this component
   directives: [CSSCarouselComponent]
})
//actual class
export class AppComponent { }