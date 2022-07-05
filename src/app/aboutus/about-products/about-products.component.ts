import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-products',
  templateUrl: './about-products.component.html',
  styleUrls: ['./about-products.component.css']
})
export class AboutProductsComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back();
  }
}
