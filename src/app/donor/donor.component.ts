import { Component, OnInit } from '@angular/core';
import {initTemplate} from '../helpers/theme';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  private p: any;
  private c: any;
  private _: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
