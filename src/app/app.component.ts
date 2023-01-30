import { Component } from '@angular/core';
import { BookMarkService } from './book-mark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  constructor(public bookmarksService: BookMarkService){
    
  }
  

}
