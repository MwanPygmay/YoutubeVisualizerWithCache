import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { SearchBarService } from './search-bar.service';

@Injectable({
  providedIn: 'root'
})
export class BookMarkService {

  bookmarks: any[]= [];

  constructor(private searchBarService: SearchBarService, private database: DatabaseService) { }

  getURL(){return this.searchBarService.getURL()}

  addUrlTobookmarks(newUrl: string) {
    if (!(this.bookmarks.includes(newUrl))) {
      this.bookmarks.push(newUrl);
      this.database.addUrlToBookmarks(newUrl);
    }
  }

  getbookmarks() {
    this.database.getBookmarks().then((res:any) => {
      res.forEach((youtubeUrl:any) => 
        this.bookmarks.push(youtubeUrl.youtubeUrl)
      );
    });
  }
}
