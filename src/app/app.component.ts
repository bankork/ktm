import {Component, OnInit} from '@angular/core';
import {initTemplate} from './helpers/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'ktmfoundation';

  ngOnInit(): void {
    initTemplate();
  }

}
