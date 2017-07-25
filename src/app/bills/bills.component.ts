import { Component, OnInit } from '@angular/core';
import { EnlightenedService } from '../enlightened.service'

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  constructor(private enlightenedService: EnlightenedService) { }

  ngOnInit() {
  }

}
