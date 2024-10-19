import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {

  @Input() totalPages!: number;
  @Input() currentPage!: number;

  @Output() pageChangeEvent = new EventEmitter<number>();

  pages!: number[];

  ngOnInit(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i: number) => i + 1);
  }

  goToPage(page: number){
    if(page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChangeEvent.emit(page);
    }
  }

  nextPage(){
    if(this.currentPage <= this.totalPages){
      this.goToPage(this.currentPage + 1);
    }
  }

  prevPage(){
    if(this.currentPage > 1){
      this.goToPage(this.currentPage - 1);
    }
  }

}
