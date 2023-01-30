import { Component } from '@angular/core';
import { BookMarkService } from '../book-mark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  public showBookmarks = false;

  constructor (public bookmarksService: BookMarkService){
    this.bookmarksService.getbookmarks();
  }

  showHideBookmarks(){this.showBookmarks = !this.showBookmarks}

  addUrlToBookmarks(newUrl: string){
    this.bookmarksService.addUrlTobookmarks(newUrl);
  }
}
