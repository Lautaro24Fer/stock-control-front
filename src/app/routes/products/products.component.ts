import { Component, OnInit } from '@angular/core';
import { IProductMocked } from '../../core/models/mock-data';
import productsMocked from '../../core/data/mock';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [PaginationComponent, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent implements OnInit {

  data: IProductMocked[] = [];
  currentPageData!: IProductMocked[];
  currentPage!: number;
  totalPages!: number 
  pageQuantity!: number;

  ngOnInit(): void {
    this.data =  productsMocked;
    this.currentPageData = productsMocked.slice(0, 3);
    this.currentPage = 1;
    this.pageQuantity = 3;
    this.totalPages = Math.ceil(productsMocked.length / this.pageQuantity);

  }

  onChangingPage(page: number){
    this.currentPage = page;
    let startIndex: number = 0;
    if(page > 1){
      startIndex = startIndex + ( this.pageQuantity * (page - 1) );
    }
    let endIndex = startIndex + this.pageQuantity;
    this.currentPageData = this.data.slice(startIndex, endIndex)
  }


}
