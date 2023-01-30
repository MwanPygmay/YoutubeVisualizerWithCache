import { Injectable } from '@angular/core';

declare var db: IDBDatabase;

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  public historyDatabase = 'history';
  bookmarksDatabase = 'bookmarks';

  constructor() {}

  addUrlToHistory(urlToAdd: string) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.historyDatabase], 'readwrite')
          .objectStore(this.historyDatabase)
          .add({ youtubeUrl: urlToAdd });
        
        request.onerror = await function (event: any) {
          console.log('request failed: ' + event.target.result);
        };

        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log('URL sucessfully added: ' + event.target.result);
            resolve('success');
          } else {
            console.log('error');
            resolve(false);
          }
        };
      }
    });
  }

  
  getHistory() {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.historyDatabase], 'readwrite')
          .objectStore(this.historyDatabase)
          .getAll();

        request.onerror = await function (event: any) {
          console.log('request failed: ' + event.target.result);
        };

        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.table(event.target.result)
            resolve(event.target.result);
          } else {
            console.log('error');
            resolve(false);
          }
        };
      }
    });
  }

    addUrlToBookmarks(urlToAdd: string) {
      return new Promise(async (resolve, reject) => {
        if (db != undefined) {
          const request = await db
            .transaction([this.bookmarksDatabase], 'readwrite')
            .objectStore(this.bookmarksDatabase)
            .add({ youtubeUrl: urlToAdd });
  
          request.onerror = await function (event: any) {
            console.log('request failed: ' + event.target.result);
          };
  
          request.onsuccess = await function (event: any) {
            if (event.target.result) {
              console.log('URL sucessfully added: ' + event.target.result);
              resolve('success');
            } else {
              console.log('error');
              resolve(false);
            }
          };
        }
      });
    }
  
    
    getBookmarks() {
      return new Promise(async (resolve, reject) => {
        if (db != undefined) {
          const request = await db
            .transaction([this.bookmarksDatabase], 'readwrite')
            .objectStore(this.bookmarksDatabase)
            .getAll();
  
          request.onerror = await function (event: any) {
            console.log('request failed: ' + event.target.result);
          };
  
          request.onsuccess = await function (event: any) {
            if (event.target.result) {
              console.table(event.target.result)
              resolve(event.target.result);
            } else {
              console.log('error');
              resolve(false);
            }
          };
        }
      });
  }
}
