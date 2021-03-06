import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  pageTitle: string = 'Product Number: ';
  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += id;
  }
  onBack(): void{
    this.router.navigate(['/products']);
  }

}
