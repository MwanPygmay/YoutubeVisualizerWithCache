window.indexedDB = window.indexedDB

window.IDBTransaction = window.IDBTransaction

window.IDBKeyRange = window.IDBKeyRange

if(!window.indexedDB){
    alert("your browser does not support indexedDB");
}

var db;

var request = window.indexedDB.open("Urls",3);

request.onerror = function(event){
    console.log("error" + event.target.result)
}

request.onsuccess = function(event){
    db = request.result;
    console.log("success "+ db)
}

request.onupgradeneeded = function(event) {

    var db = event.target.result;
    var objectStore = db.createObjectStore("history", {keyPath: "youtubeUrl"});
    var objectStore = db.createObjectStore("bookmarks", {keyPath: "youtubeUrl"});
}
