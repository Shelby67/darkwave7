import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable, range } from 'rxjs';
import { map, filter } from 'rxjs/operators';
declare function myTest(): any;
const arrayList$: Observable<number> = range(0, 10);

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  constructor(private getService: ProductService) {
    
    // this.listFilter = 'lawn';
    arrayList$.pipe(
      map(x => x*3),
      filter(x => x % 2 ===0)

    ).subscribe(x => console.log(x));
  }

  imgWidth: number = 120;
  pageTitle: string = 'Top 5'
  imgMargin: number = 2;
  showImg: boolean = true;
  _listFilter: string;
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filterProducts = this.listFilter ? this.performFilter(value) : this.products;
  }
  filterProducts: IProduct[];
  products: IProduct[] = [];
  errorMessage = '';
  toggleImage(): void {
    this.showImg = !this.showImg;
    myTest();   
  }
   

  ngOnInit(): any {
    console.log("Inside ngOnInit");
    this.getService.getProducts().subscribe(
      products => {this.products = products,
      this.filterProducts = this.products
    },
      error => this.errorMessage = <any>error
    );
    
         
  }

  performFilter(key: string): IProduct[]{
    key = key.toLocaleLowerCase();
    return this.products.filter((product: IProduct)=>
      product.productName.toLocaleLowerCase().indexOf(key) !== -1);
  }
  startRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message;
  }

}
