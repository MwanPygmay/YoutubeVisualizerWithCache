import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  history: any[] = [];

  constructor(private database: DatabaseService) {}

  addUrlToHistory(newUrl: string) {
    if (!(newUrl in this.history)) {
      this.history.push(newUrl);
      this.database.addUrlToHistory(newUrl);
    }
  }

  getHistory() {
    this.database.getHistory().then((res: any) => {
      res.forEach((youtubeUrl: any) =>
        this.history.push(youtubeUrl.youtubeUrl)
      );
    });
  }
}
