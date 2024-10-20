import { Component, inject, OnInit, signal } from '@angular/core';
import { IProductMocked } from '../../core/models/mock-data';
import productsMocked from '../../core/data/mock';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { CurrencyPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../../shared/delete-modal/delete-modal.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [PaginationComponent, CurrencyPipe, DeleteModalComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent implements OnInit {

  // Pagination
  data!: IProductMocked[];
  currentPageData!: IProductMocked[];
  currentPage!: number;
  totalPages!: number 
  pageQuantity!: number;

  // Select a product for delete
  selected = signal(0)
  readonly dialog = inject(MatDialog);

  handleSelectProduct(productId: number){
    this.selected.set(productId);
    console.log("SEÑAL")
    console.log(this.selected())
  }

  handleDeleteProduct(){
    const id: number = this.selected();
    if(id > 0){
      this.currentPageData = this.data.filter((p) => p.id !== +id);
      this.selected.set(0); 
    }
  }

  ngOnInit(): void {
    this.data =  productsMocked;
    this.currentPageData = productsMocked.slice(0, 3);
    this.currentPage = 1;
    this.pageQuantity = 3;
    this.totalPages = Math.ceil(productsMocked.length / this.pageQuantity);
  }

  onChangingPage(page: number): void{
    this.currentPage = page;
    let startIndex: number = 0;
    if(page > 1){
      startIndex = startIndex + ( this.pageQuantity * (page - 1) );
    }
    let endIndex = startIndex + this.pageQuantity;
    this.currentPageData = this.data.slice(startIndex, endIndex)
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: string): void {
    this.handleSelectProduct(Number(id));
    this.dialog.open(DeleteModalComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }
}
