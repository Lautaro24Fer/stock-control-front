import { Component, OnInit } from '@angular/core';
import { IProductMocked } from '../../core/models/mock-data';
import productsMocked from '../../core/data/mock';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent implements OnInit {

  data: IProductMocked[] = [];

  ngOnInit(): void {
    this.data =  productsMocked;
  }

}
