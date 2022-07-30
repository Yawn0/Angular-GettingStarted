import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './poroduct-detail.component.html',
  styleUrls: ['./poroduct-detail.component.css']
})
export class PoroductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";

  constructor() { }

  ngOnInit(): void {
  }

}
