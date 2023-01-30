import { Component } from '@angular/core';
import { HistoryService } from '../history.service';
import { SearchBarService } from '../search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  text = '';
  submitted = false;

  constructor (public searchBarService: SearchBarService){}

  onSubmit() { this.submitted = true; this.searchBarService.changeURL(this.text);}
}
