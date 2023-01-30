import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchBarService } from '../search-bar.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent {
  
  constructor(public searchBarService: SearchBarService){}

  getURL(){
    return this.searchBarService.getURL().replace('watch?v=','embed/')
  }

}


