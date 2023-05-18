import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './poroduct-detail.component.html',
  styleUrls: ['./poroduct-detail.component.css']
})
export class PoroductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void {
    this.pageTitle += ' : ' + this.route.snapshot.paramMap.get('id');
  }
  
  onBack() : void{
    this.router.navigate(['/products']);
  }
}
