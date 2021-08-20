import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initTemplate, loadScript} from './helpers/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
 title = 'ktmfoundation';
  private static readonly externalScripts = [
    '../assets/js/jquery.min.js',
    '../assets/js/libs.min.js',
    '../assets/js/common.min.js',
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    for (const script of AppComponent.externalScripts) {
      loadScript(script);
    }
  }

}
